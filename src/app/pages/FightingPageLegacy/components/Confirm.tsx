import { FC } from "react";
import { confirmRetry, useFighting } from "../../../../store/features/fighting";
import { useAppDispatch } from "../../../../store/utils";

export const Confirm: FC = () => {
  const fighting = useFighting();
  const dispatch = useAppDispatch();

  if (fighting.currentRequest !== "confirmRetry") {
    return null;
  }

  return (
    <div>
      <p>Play once more?</p>

      <div style={{ display: "flex" }}>
        <button onClick={() => dispatch(confirmRetry(true))}>Yes</button>
        <button onClick={() => dispatch(confirmRetry(false))}>No</button>
      </div>
    </div>
  );
};
