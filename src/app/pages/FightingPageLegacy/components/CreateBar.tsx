import { FC, useState } from "react";
import { createActor, useFighting } from "../../../../store/features/fighting";
import { useAppDispatch } from "../../../../store/utils";

export const CreateBar: FC = () => {
  const [health, setHealth] = useState(3);
  const [stamina, setStamina] = useState(3);

  const fighting = useFighting();
  const dispatch = useAppDispatch();

  if (fighting.currentRequest !== "createActor") {
    return null;
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <p>Health</p>
        <button onClick={() => setHealth(1)}>1</button>
        <button onClick={() => setHealth(2)}>2</button>
        <button onClick={() => setHealth(3)}>3</button>
        <button onClick={() => setHealth(4)}>4</button>
        <button onClick={() => setHealth(5)}>5</button>
      </div>
      <div style={{ display: "flex" }}>
        <p>Stamina</p>
        <button onClick={() => setStamina(1)}>1</button>
        <button onClick={() => setStamina(2)}>2</button>
        <button onClick={() => setStamina(3)}>3</button>
        <button onClick={() => setStamina(4)}>4</button>
        <button onClick={() => setStamina(5)}>5</button>
      </div>
      <button
        onClick={() => {
          dispatch(createActor({ health, stamina }));
        }}
      >
        Submit
      </button>
    </div>
  );
};
