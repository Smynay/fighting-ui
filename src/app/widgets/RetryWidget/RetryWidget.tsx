import { observer } from "mobx-react-lite";
import { useViewModel } from "../../providers";
import { Confirm } from "../../components";
import { useNavigate } from "react-router";

export const RetryWidget = observer(function StatsWidget() {
  const retryVM = useViewModel("retryWidgetViewModel");
  const navigate = useNavigate();

  const handleClose = () => {
    retryVM.decline();

    navigate("/");
  };

  return (
    <Confirm
      isOpen={retryVM.isShow}
      text={"Would you play once more?"}
      onClose={handleClose}
      onConfirm={() => retryVM.confirm()}
    />
  );
});
