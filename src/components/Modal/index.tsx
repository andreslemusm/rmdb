import React, { useRef, useEffect, Fragment } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: React.ReactNode;
};

const modalRoot = document.getElementById("modal-root") as HTMLElement;

export const Modal = ({ children }: ModalProps): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null!);
  if (ref.current === null) {
    const div = document.createElement("div");
    ref.current = div;
  }

  useEffect(() => {
    modalRoot.appendChild(ref.current);

    return (): void => {
      modalRoot.removeChild(ref.current);
    };
  }, []);

  return createPortal(<Fragment>{children}</Fragment>, ref.current);
};
