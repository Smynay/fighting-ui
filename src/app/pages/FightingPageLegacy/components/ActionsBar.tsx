import { FC } from "react";
import { chooseAction, useFighting } from "../../../../store/features/fighting";
import { useAppDispatch } from "../../../../store/utils";

export const ActionsBar: FC = () => {
  const fighting = useFighting();
  const dispatch = useAppDispatch();

  if (fighting.currentRequest !== "chooseAction") {
    return null;
  }

  return (
    <div>
      {fighting.availableActions.map((val, idx) => (
        <button key={idx} onClick={() => dispatch(chooseAction(val))}>
          {val}
        </button>
      ))}
    </div>
  );
};
