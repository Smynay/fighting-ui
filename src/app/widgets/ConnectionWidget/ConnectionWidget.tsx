import { useViewModel } from "../../providers";
import { observer } from "mobx-react-lite";
export const ConnectionWidget = observer(function ConnectionWidget() {
  const connectionVM = useViewModel("connectionWidgetViewModel");

  if (connectionVM.isLoading) {
    return <p>Connecting...</p>;
  }

  if (!connectionVM.isLoading && !connectionVM.isConnected) {
    return <p onClick={connectionVM.connect}>Disconnected</p>;
  }

  return <p onClick={connectionVM.disconnect}>Connected</p>;
});
