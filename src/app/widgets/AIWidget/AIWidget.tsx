import { observer } from "mobx-react-lite";
import { useViewModel } from "../../providers";
import { GameControls } from "../../components";

export const AIWidget = observer(function AIWidget() {
    const aiVM = useViewModel("aiWidgetViewModel");

    if (!aiVM.isShown) {
        return null;
    }

    return <GameControls actions={aiVM.options} fullWidth />;
});
