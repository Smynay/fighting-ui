import "./StatsWidget.css";
import { observer } from "mobx-react-lite";
import { useViewModel } from "../../providers";
import { GameStatsBars } from "../../components";
import { FC, PropsWithChildren } from "react";

export const StatsWidget: FC<PropsWithChildren> = observer(
  function StatsWidget({ children }) {
    const statsVM = useViewModel("statsWidgetViewModel");

    if (!statsVM.isShow) {
      return null;
    }

    return (
      <div className="StatsWidget">
        <div className="StatsWidget__block">
          <GameStatsBars {...statsVM.userStats} position="left" />
        </div>

        <div>{children}</div>

        <div className="StatsWidget__block">
          <GameStatsBars {...statsVM.enemyStats} position="right" />
        </div>
      </div>
    );
  },
);
