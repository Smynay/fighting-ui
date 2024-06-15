import { FC } from "react";
import { Typography } from "../Typography";

type CounterProps = {
  value: number;
  size?: "m" | "s";
};

export const Counter: FC<CounterProps> = ({ value, size = "m" }) => {
  return (
    <Typography size={size} weight="bold" component="span">
      {value}
    </Typography>
  );
};
