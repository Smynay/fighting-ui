import { observer } from "mobx-react-lite";
import { useViewModel } from "../../providers";
import { GameControls, Modal } from "../../components";

export const CreateActorWidget = observer(function CreateActorWidget() {
  const createActorVM = useViewModel("createActorWidgetViewModel");

  const footer = (
    <button onClick={() => createActorVM.createActor()}>Send</button>
  );

  return (
    <Modal
      isOpen={createActorVM.isShown}
      header="Complete stats for your character"
      footer={footer}
      disableBackdrop
    >
      <>
        <GameControls actions={createActorVM.healthParams} fullWidth />
        <br />
        <GameControls actions={createActorVM.staminaParams} fullWidth />
      </>
    </Modal>
  );
});
