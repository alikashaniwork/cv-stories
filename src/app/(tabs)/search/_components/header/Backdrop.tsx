"use client";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Backdrop = ({ children, isOpen, onClose }: Props) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return createPortal(
        <div
            className={`fixed top-12 z-10 right-0 w-full transition-all duration-500 ${
                isOpen
                    ? "visible opacity-1 h-[60vh]"
                    : "opacity-0 invisible h-[0]"
            }`}
        >
            <div
                className="fixed w-full h-[calc(100vh-96px)] top-0 z-0"
                onClick={onClose}
            />
            {children}
        </div>,
        document.body
    );
};

export default Backdrop;
