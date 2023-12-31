import { Fragment, ReactNode } from "react";
import closeIcon from "../assets/close-icon.svg";

type PropsType = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  children: ReactNode;
};

const Modal = ({ showModal, setShowModal, children }: PropsType) => {
  return (
    <Fragment>
      {showModal && (
        <div className="fixed inset-0 z-30 overflow-y-auto">
          <div
            className="flex min-h-screen items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0"
            // onClick={handleModalClick}
          >
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div
                onClick={() => setShowModal(false)}
                className="absolute inset-0 brightness-50 backdrop-blur-sm"
              ></div>
            </div>

            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              className="relative inline-block transform rounded-lg bg-white text-left  align-bottom shadow-xl transition-all  sm:align-middle"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="flex justify-end">
                <button
                  className="mr-1 mt-1 rounded-full p-1 duration-300 hover:bg-stone-100"
                  onClick={() => setShowModal(false)}
                >
                  <img src={closeIcon} alt="close icon" />
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Modal;
