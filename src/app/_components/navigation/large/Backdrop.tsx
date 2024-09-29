"use client";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
}

const Backdrop = ({ children, open, onClose }: Props) => {
    const [isMounted, setIsMounted] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        const eventHandler = () => onClose();
        document.addEventListener("scroll", eventHandler);
        return () => {
            document.removeEventListener("scroll", eventHandler);
        };
    }, [onClose]);

    useEffect(() => {
        onClose();
    }, [pathname]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return createPortal(
        <div
            className={`bg-[#2227] backdrop-blur-3xl fixed top-0 z-30 right-0 w-full transition-all duration-500 ${
                open ? "visible opacity-1" : "opacity-0 invisible"
            }`}
        >
            <div
                className="fixed h-screen inset-0 z-0 backdrop-blur-sm"
                onClick={onClose}
            />
            {children}
        </div>,
        document.body
    );
};

export default Backdrop;
