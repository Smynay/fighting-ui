import { useViewModel } from "../../providers";
import { observer } from "mobx-react-lite";
import { Typography } from "../../components";
export const ConnectionWidget = observer(function ConnectionWidget() {
  const connectionVM = useViewModel("connectionWidgetViewModel");

  if (connectionVM.isLoading) {
    return <Typography>Connecting...</Typography>;
  }

  if (!connectionVM.isLoading && !connectionVM.isConnected) {
    return <Typography onClick={connectionVM.connect}>Disconnected</Typography>;
  }

  return <Typography onClick={connectionVM.disconnect}>Connected</Typography>;
});
