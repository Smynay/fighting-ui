import { GameControls } from "../../components";
import { observer } from "mobx-react-lite";
import { useViewModel } from "../../providers";

export const GameModeWidget = observer(function GameModeWidget() {
  const gameModeVM = useViewModel("gameModeWidgetViewModel");

  if (!gameModeVM.isShown) {
    return null;
  }

  return <GameControls actions={gameModeVM.modes} fullWidth />;
});
