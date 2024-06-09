import styles from "./Modal.module.css";
import {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import { useGetNewIdOrPassed, useModalOpenState } from "../hooks";

export type ModalProps = PropsWithChildren & {
  id?: string;
  header: ReactNode;

  footer: ReactNode;

  isOpen?: boolean;

  onClose?: () => void;

  disableBackdrop?: boolean;
};

export const Modal: FC<ModalProps> = ({
  id,
  isOpen = false,
  header,
  children,
  footer,
  onClose,
  disableBackdrop = false,
}) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const currentId = useGetNewIdOrPassed("modal", id);
  const [isModalOpen, setIsModalOpen] = useModalOpenState(isOpen);

  const handleClose: MouseEventHandler = (e) => {
    if (e.target === backdropRef.current && !disableBackdrop) {
      setIsModalOpen(false);

      onClose?.();
    }
  };

  if (!isModalOpen) {
    return null;
  }

  return createPortal(
    <div id={currentId} className={styles.root}>
      <div ref={backdropRef} className={styles.backdrop} onClick={handleClose}>
        <div className={styles.window}>
          <div className={styles.header}>{header}</div>
          {children && <div className={styles.content}>{children}</div>}
          {footer && <div className={styles.footer}>{footer}</div>}
        </div>
      </div>
    </div>,
    document.body,
  );
};
