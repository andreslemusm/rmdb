import React from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  children: React.ReactNode;
};

export const Modal = ({ children }: ModalProps): React.ReactElement => {
  const ref = React.useRef<HTMLDivElement>(null!);
  if (ref.current === null) {
    const div = document.createElement("div");
    ref.current = div;
  }

  React.useEffect(() => {
    const modalRoot = document.getElementById("modal-root") as HTMLElement;
    modalRoot.appendChild(ref.current);

    return (): void => {
      modalRoot.removeChild(ref.current);
    };
  }, []);

  return ReactDOM.createPortal(
    <React.Fragment>{children}</React.Fragment>,
    ref.current
  );
};
