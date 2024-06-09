import store from "../../../store";
import {
  ActionsBar,
  Confirm,
  ConnectionStatus,
  CreateBar,
  GameMode,
  MatchResult,
  Results,
} from "./components";
import { Provider } from "react-redux";

export const FightingPageLegacy = () => {
  return (
    <Provider store={store}>
      <ConnectionStatus />
      <GameMode />
      <Results />
      <CreateBar />
      <ActionsBar />
      <MatchResult />
      <Confirm />
    </Provider>
  );
};
