import { INIT } from "../core";
import { makeAutoObservable } from "mobx";

type Listener<T extends Action = Action> = (action?: T) => void;

export type Action<T = any> = {
  type: string;
  payload?: T;
};
export enum EventType {
  OPEN = "open",
  MESSAGE = "message",
  DOMAIN_MESSAGE = "domain_message",
  ERROR = "error",
  CLOSE = "close",
}

export type DomainMessage = {};

export class Connection {
  constructor(private readonly url: string) {
    makeAutoObservable(this);
  }

  public get isConnected(): boolean {
    return this._isConnected;
  }

  public get isLoading(): boolean {
    return this._isLoading;
  }

  public get socket(): WebSocket | undefined {
    return this._socket;
  }

  private setSocket(value: WebSocket | undefined) {
    this._socket = value;
  }
  private _socket: WebSocket | undefined = undefined;
  private _isConnected: boolean = false;
  private _isLoading: boolean = false;
  private subscriptions: Record<EventType | string, Listener[]> = {
    [EventType.OPEN]: [],
    [EventType.MESSAGE]: [],
    [EventType.DOMAIN_MESSAGE]: [],
    [EventType.ERROR]: [],
    [EventType.CLOSE]: [],
  };

  public [INIT](): void {}

  public connect(): void {
    this._isLoading = true;

    this.setSocket(new WebSocket(this.url));

    this.runSubscribes();
  }

  private runSubscribes(): void {
    if (!this.socket) {
      return;
    }

    this.socket.onopen = () => {
      this._isConnected = true;
      this._isLoading = false;

      this.publish(EventType.OPEN);
    };

    this.socket.onmessage = (event) => {
      const { data } = event;

      const parsedData: Action = JSON.parse(data);

      this.publish(EventType.MESSAGE, parsedData);

      if (!parsedData.type) {
        return;
      }

      const [domain] = parsedData.type.split("/");

      this.publish(domain, parsedData);
    };

    this.socket.onerror = (event: unknown) => {
      this.publish(EventType.ERROR, {
        type: EventType.ERROR,
        payload: event,
      });
    };

    this.socket.onclose = (event: unknown) => {
      this._isConnected = false;
      this._isLoading = false;

      this.publish(EventType.CLOSE, {
        type: EventType.CLOSE,
        payload: event,
      });
    };
  }

  public disconnect(): void {
    this.socket?.close();
  }

  private publish<T extends Action = Action>(
    type: EventType | string,
    payload?: T,
  ): void {
    this.subscriptions[type]?.forEach((listener) => listener(payload));
  }

  public send<T = any>(type: string, payload?: T): void {
    this.socket?.send(JSON.stringify({ type, payload }));
  }

  public subscribe<T extends Action = Action>(
    type: EventType | string,
    listener: Listener<T>,
  ): () => void {
    if (this.subscriptions[type]) {
      this.subscriptions[type].push(listener as Listener);
    } else {
      this.subscriptions[type] = [listener as Listener];
    }

    return () => this.unsubscribe(type, listener);
  }

  private unsubscribe<T extends Action = Action>(
    type: EventType | string,
    listener: Listener<T>,
  ): void {
    this.subscriptions[type]?.filter((checkable) => checkable === listener);
  }
}
