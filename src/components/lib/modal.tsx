import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

type ModalProps = {
  children?: React.ReactNode;
  open: boolean;
} & Pick<Parameters<typeof Dialog>[0], "initialFocus" | "onClose">;

export const Modal = ({
  children,
  open,
  onClose,
  initialFocus,
}: ModalProps): React.ReactElement => (
  <Transition.Root show={open} as={Fragment}>
    <Dialog
      as="div"
      className="fixed z-50 inset-0 overflow-y-auto"
      onClose={onClose}
      initialFocus={initialFocus}
    >
      <div className="min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-white bg-opacity-10 transition-opacity backdrop-filter backdrop-blur-sm" />
        </Transition.Child>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="inline-block align-middle h-screen" aria-hidden="true">
          &#8203;
        </span>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div className="inline-block align-middle bg-secondary rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-2xl transform transition-all my-8 max-w-6xl w-full sm:p-6">
            {children}
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>
);
