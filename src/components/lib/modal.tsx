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
      className="fixed inset-0 z-50 overflow-y-auto"
      onClose={onClose}
      initialFocus={initialFocus}
    >
      <div className="min-h-screen px-4 pt-4 pb-20 text-center">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-white bg-opacity-10 backdrop-blur-sm backdrop-filter transition-opacity" />
        </Transition.Child>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4"
          enterTo="opacity-100 translate-y-0"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-4"
        >
          <div className="my-8 inline-block w-full max-w-6xl transform overflow-hidden rounded-lg bg-secondary px-4 pt-5 pb-4 text-left align-middle shadow-2xl transition-all sm:p-6">
            {children}
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>
);
