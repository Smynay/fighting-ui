import { configureStore } from "@reduxjs/toolkit";
import reducer from "./features";
import { socketMiddleware } from "./middlewares";
import { connect, init, refuse, error, message } from "./features/connection";
import { setRequest } from "./features/fighting";
import { getServerUrl } from "../core/utils";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      socketMiddleware(getServerUrl(), {
        onInit: init.type,
        onConnect: connect.type,
        onClose: refuse.type,
        onError: error.type,
        onMessage: message.type,
        fighting: setRequest.type,
      }),
    ),
});
