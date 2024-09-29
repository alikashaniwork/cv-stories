"use client";
import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import { Fragment, ReactNode, useRef } from "react";

interface Props {
    open: boolean;
    onClose: (value: boolean) => void;
    children: ReactNode;
}

const Backdrop = ({ open, onClose, children }: Props) => {
    const cancelButtonRef = useRef(null);
    const handleClose = () => onClose(false);

    return (
        <Transition show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-50"
                initialFocus={cancelButtonRef}
                onClose={handleClose}
            >
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-dark-200 bg-opacity-75 backdrop-blur transition-opacity" />
                </TransitionChild>

                <div className="fixed inset-0 lg:flex lg:items-center lg:justify-center z-10 lg:w-screen overflow-y-auto">
                    <div className="flex items-end lg:items-center justify-center text-center">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <DialogPanel className="w-dvw lg:w-auto absolute bottom-0 flex items-end lg:items-center lg:justify-center lg:bottom-1/2 lg:translate-y-1/2 transform overflow-hidden rounded-t-2xl lg:rounded-2xl text-left bg-neutral-800 shadow-lg shadow-[#1116] transition-all">
                                {children}
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Backdrop;
