import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface IAuthState {
  name?: string;
  id?: string;
  authorized: boolean;
  loading: boolean;
  error: boolean;
}

export const initialState: IAuthState = {
  authorized: false,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state) {
      state.error = false;
    },
    fetchError(state) {
      state.error = true;
    },
    updateInfo(state, action: PayloadAction<{ name: string; id: string }>) {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.authorized = true;
    },
    handleLogout() {
      return initialState;
    },
  },
});

export const {
  fetchStarted,
  fetchSuccess,
  fetchError,
  updateInfo,
  handleLogout,
} = authSlice.actions;
export default authSlice.reducer;
