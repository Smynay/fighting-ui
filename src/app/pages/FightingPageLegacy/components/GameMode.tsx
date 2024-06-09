import { FC } from "react";
import {
  chooseGameMode,
  useFighting,
} from "../../../../store/features/fighting";
import { useAppDispatch } from "../../../../store/utils";

export const GameMode: FC = () => {
  const fighting = useFighting();
  const dispatch = useAppDispatch();

  if (fighting.currentRequest !== "chooseGameMode") {
    return null;
  }

  return (
    <div>
      {Object.keys(fighting.availableModes).map((val, idx) => (
        <button
          key={idx}
          onClick={() => dispatch(chooseGameMode(fighting.availableModes[val]))}
        >
          {val}
        </button>
      ))}
    </div>
  );
};
