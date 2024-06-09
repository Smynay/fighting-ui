import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../utils";

export interface IConnectionState {
  connected: boolean;
  refused: boolean;
  error?: any;
  messages: any[];
}

export const initialState: IConnectionState = {
  connected: false,
  refused: false,
  messages: [],
};

const connectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    init() {},
    connect(state) {
      state.connected = true;
      state.refused = false;
    },
    refuse(state) {
      state.connected = false;
      state.refused = true;
    },
    error(state, { payload }) {
      state.error = payload;
    },
    message(state, { payload }) {
      state.messages = state.messages.concat(payload);
    },
  },
});

export const { init, connect, refuse, error, message } =
  connectionSlice.actions;
export default connectionSlice.reducer;
export const useConnection = (): IConnectionState =>
  useAppSelector<IConnectionState>((state) => state.connection);
