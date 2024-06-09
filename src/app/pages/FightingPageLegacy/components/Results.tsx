import { FC } from "react";
import { useFighting } from "../../../../store/features/fighting";

export const Results: FC = () => {
  const fighting = useFighting();

  if (!fighting.results) {
    return null;
  }

  return (
    <div>
      <p>Action: {fighting.results?.action}</p>
      <p>Round: {fighting.results?.round}</p>
      <p>User result:</p>
      <pre>{JSON.stringify(fighting.results?.player)}</pre>
      <p>Opponent result:</p>
      <pre>{JSON.stringify(fighting.results?.opponent)}</pre>
    </div>
  );
};
