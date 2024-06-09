import React, { FC } from "react";
import { useGetNewIdOrPassed, useModalOpenState } from "../hooks";
import { Modal } from "../Modal";

type ConfirmProps = {
  title?: string;
  text: string;
  isOpen?: boolean;
  onConfirm?: () => void;
  onClose?: () => void;
};

export const Confirm: FC<ConfirmProps> = ({
  isOpen = false,
  title,
  text,
  onConfirm,
  onClose,
}) => {
  const currentId = useGetNewIdOrPassed("confirm");
  const [isConfirmOpen, setIsConfirmOpen] = useModalOpenState(isOpen);

  if (!isConfirmOpen) {
    return null;
  }

  const handleClose = () => {
    setIsConfirmOpen(false);

    onClose?.();
  };

  const handleConfirm = () => {
    setIsConfirmOpen(false);

    onConfirm?.();
  };

  const header = title ?? "Confirmation";

  const footer = (
    <div>
      <button onClick={handleClose}>Close</button>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );

  return (
    <Modal
      id={currentId}
      isOpen={isConfirmOpen}
      header={header}
      footer={footer}
      onClose={handleClose}
    >
      {text}
    </Modal>
  );
};
