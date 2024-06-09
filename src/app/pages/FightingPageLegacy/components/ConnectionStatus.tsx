import { init, useConnection } from "../../../../store/features/connection";
import { FC } from "react";
import { useAppDispatch } from "../../../../store/utils";

export const ConnectionStatus: FC = () => {
  const connection = useConnection();
  const dispatch = useAppDispatch();

  return (
    <div
      style={{ color: connection.connected ? "green" : "red" }}
      onClick={() => dispatch(init())}
    >
      {connection.connected ? "Connected" : "Disconnected"}
    </div>
  );
};
