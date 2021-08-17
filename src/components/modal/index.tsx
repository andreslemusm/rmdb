import { createPortal } from "react-dom";

type ModalProps = {
  children: React.ReactNode;
};

const modalRoot = document.getElementById("modal-root") as HTMLElement;

export const Modal = ({ children }: ModalProps): React.ReactElement =>
  createPortal(children, modalRoot);
