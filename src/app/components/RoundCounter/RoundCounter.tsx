import styles from "./RoundCounter.module.css";
import { FC } from "react";
import { Counter } from "../Counter";
import { Typography } from "../Typography";

type RoundCounterProps = {
  round: number;
  action: number;
};

export const RoundCounter: FC<RoundCounterProps> = ({ round, action }) => {
  return (
    <div className={styles.root}>
      <Typography align="center">
        Round: <Counter value={round} />
      </Typography>
      <Typography align="center" size="s">
        Action: <Counter value={action} size="s" />
      </Typography>
    </div>
  );
};
