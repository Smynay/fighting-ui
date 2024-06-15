import { observer } from "mobx-react-lite";
import { useViewModel } from "../../providers";
import { RoundCounter, Typography } from "../../components";

export const RoundCounterWidget = observer(function RoundCounterWidget() {
  const roundCounterVM = useViewModel("roundCounterViewModel");

  if (!roundCounterVM.isShow) {
    return null;
  }

  if (roundCounterVM.isMatchResult) {
    return (
      <Typography weight="bold" transform="capitalize" align="center" size="l">
        {roundCounterVM.gameResult}
      </Typography>
    );
  }

  return (
    <RoundCounter round={roundCounterVM.round} action={roundCounterVM.action} />
  );
});
