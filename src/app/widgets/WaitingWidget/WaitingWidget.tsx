import { FC, PropsWithChildren } from "react";
import { observer } from "mobx-react-lite";
import { useViewModel } from "../../providers";
import { Typography } from "../../components";

export const WaitingWidget: FC<PropsWithChildren> = observer(
  function WaitingWidget({ children }) {
    const waitingVM = useViewModel("waitingWidgetViewModel");

    if (!waitingVM.isShow) {
      return null;
    }

    return (
      <Typography size="l" align="center">
        Waiting for opponent ...
      </Typography>
    );
  },
);
