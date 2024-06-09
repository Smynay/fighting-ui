import "./StatsWidget.css";
import { observer } from "mobx-react-lite";
import { useViewModel } from "../../providers";
import { GameStatsBars } from "../../components";

export const StatsWidget = observer(function StatsWidget() {
  const statsVM = useViewModel("statsWidgetViewModel");

  if (!statsVM.isShow) {
    return null;
  }

  return (
    <div className="StatsWidget">
      <div className="StatsWidget__block">
        <GameStatsBars {...statsVM.userStats} position="left" />
      </div>

      <div className="StatsWidget__block">
        <GameStatsBars {...statsVM.enemyStats} position="right" />
      </div>
    </div>
  );
});
