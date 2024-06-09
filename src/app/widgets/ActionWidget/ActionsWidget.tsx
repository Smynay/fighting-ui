import { observer } from "mobx-react-lite";
import { useViewModel } from "../../providers";
import { GameControls } from "../../components";

export const ActionsWidget = observer(function ActionsWidget() {
  const actionsVM = useViewModel("actionsWidgetViewModel");

  if (!actionsVM.isShown) {
    return null;
  }

  return <GameControls actions={actionsVM.actions} fullWidth />;
});
