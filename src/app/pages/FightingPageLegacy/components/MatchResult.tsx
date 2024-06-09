import { FC } from "react";
import { useFighting } from "../../../../store/features/fighting";

export const MatchResult: FC = () => {
  const fighting = useFighting();

  if (!fighting.matchResult) {
    return null;
  }

  return <h2>{fighting.matchResult.toUpperCase()}</h2>;
};
