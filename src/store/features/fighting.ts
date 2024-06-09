import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../utils";

interface IUserInfo {
  health: number;
  stamina: number;
  selectedAction: string;
  executedAction: string;
}

interface IResults {
  action: number;
  round: number;
  opponent: IUserInfo;
  player: IUserInfo;
}

export interface IFightingState {
  id?: string;
  currentAction?: string;
  preparedAction?: string;
  executedAction?: string;
  currentRequest?: string;
  availableActions: string[];
  availableModes: Record<string, number>;
  results?: IResults;
  matchResult?: string;
}

export const initialState: IFightingState = {
  availableActions: [],
  availableModes: {},
};

const fightingSlice = createSlice({
  name: "fighting",
  initialState,
  reducers: {
    init() {},

    setRequest(state, { payload }) {
      console.log(payload);
      state.id = payload?.id || state.id;
      state.currentRequest = payload?.type;
      state.availableActions = payload?.actions || [];
      state.availableModes = payload?.modes || {};
      state.results = payload?.results || state.results;

      if (!payload?.results?.winnerId && payload?.results?.winnerId !== null) {
        return;
      }

      if (payload.results.winnerId === null) {
        state.matchResult = "draw";
        return;
      }

      if (payload.results.winnerId === state.id) {
        state.matchResult = "winner";
      }

      if (payload.results.winnerId !== state.id) {
        state.matchResult = "looser";
      }
    },
    chooseAction: (
      state: IFightingState,
      { payload }: PayloadAction<string>,
    ) => {
      state.preparedAction = payload;
      state.availableActions = [];
    },
    createActor: (
      state,
      action: PayloadAction<{ health: number; stamina: number }>,
    ) => {},
    confirmRetry: (
      state: IFightingState,
      { payload }: PayloadAction<boolean>,
    ) => {
      state.currentRequest = undefined;
      state.results = undefined;
      state.matchResult = undefined;
    },
    chooseGameMode: (state, { payload }: PayloadAction<number>) => {},
  },
});

export const {
  chooseAction,
  createActor,
  confirmRetry,
  chooseGameMode,
  setRequest,
  init,
} = fightingSlice.actions;
export default fightingSlice.reducer;
export const useFighting = (): IFightingState =>
  useAppSelector<IFightingState>((state) => state.fighting);
