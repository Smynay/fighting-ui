import { Middleware } from "redux";
import { AppDispatch, RootState } from "../types";
import { Action } from "@reduxjs/toolkit";

export enum SocketEvents {
  CONNECT = "connect",
  ERROR = "error",
  CLOSE = "close",
  MESSAGE = "message",
  SEND = "send",
}

export type ISocketActionTypes = {
  onInit: string;
  onConnect: string;
  onError: string;
  onMessage: string;
  onClose: string;
  handledTypes: string[];
} & { [key: string]: string };
let socket: WebSocket | null = null;

export const socketMiddleware: any =
  (
    url: string,
    actionTypes: ISocketActionTypes,
  ): Middleware<{}, RootState, AppDispatch> =>
  (storeApi) =>
  (next) =>
  (action) => {
    const { dispatch } = storeApi;
    const { type } = action as Action;
    const { onInit, onConnect, onError, onMessage, onClose } = actionTypes;

    if (type === onInit) {
      console.log("init ws");
      socket = new WebSocket(url);
    }

    if (socket && type === onClose) {
      socket.close();
    }

    if (socket) {
      socket.onopen = () => {
        dispatch({ type: onConnect });
      };

      socket.onmessage = (event) => {
        const { data } = event;

        const parsedData = JSON.parse(data);

        dispatch({ type: onMessage, payload: parsedData });

        if (!parsedData.type) {
          return;
        }

        const [resolver, eventType] = parsedData.type.split("/");
        const resolverEventType = actionTypes[resolver];

        console.log(resolverEventType);

        if (!resolverEventType) {
          console.error("Unresolved event type: ", resolverEventType);
          return;
        }

        dispatch({
          type: resolverEventType,
          payload: { type: eventType, ...parsedData.payload },
        });
      };

      socket.onerror = (event: unknown) => {
        dispatch({ type: onError, payload: event });
      };

      socket.onclose = (event: unknown) => {
        dispatch({ type: onClose, payload: event });
      };
    }

    if (!Object.values(actionTypes).includes(type)) {
      socket?.send(JSON.stringify(action));
    }

    next(action);
  };
