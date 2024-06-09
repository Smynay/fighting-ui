import styles from "./GameControls.module.css";
import { FC } from "react";
import classnames from "classnames";

type GameControlsAction = {
  title: string;
  callback: () => void;
  selected?: boolean;
};

type GameControlsProps = {
  actions: GameControlsAction[];
  fullWidth?: boolean;
};
export const GameControls: FC<GameControlsProps> = ({
  actions,
  fullWidth = false,
}) => {
  return (
    <div
      className={classnames(styles.root, {
        [styles.root_fullWidth]: fullWidth,
      })}
    >
      {actions.map(({ title, callback, selected }) => (
        <button
          key={title}
          onClick={callback}
          className={classnames(styles.control, {
            [styles.control_selected]: selected,
          })}
        >
          {title}
        </button>
      ))}
    </div>
  );
};
