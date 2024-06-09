import "./GameStatsBar.css";
import { FC } from "react";
import { StatBar, StatBarProps } from "../StatBar";

type GameStatsBarsProps = Pick<StatBarProps, "position"> & {
  health: number;
  stamina: number;
  executedAction: string;
};

export const GameStatsBars: FC<GameStatsBarsProps> = ({
  health,
  stamina,
  executedAction,
  position,
}) => {
  return (
    <div className="GameStatsBar">
      <StatBar color="red" value={health} position={position} />

      <div className="GameStatsBar__secondary">
        {position === "right" ? <span>{executedAction}</span> : undefined}

        <StatBar
          color="blue"
          value={stamina}
          size="sm"
          position={position}
          length="60%"
        />

        {position === "left" ? <span>{executedAction}</span> : undefined}
      </div>
    </div>
  );
};
