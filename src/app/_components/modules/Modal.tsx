"use client";
import { Backdrop } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
    open: boolean;
    onClose: () => void;
    isSuccess?: boolean;
    children: ReactNode;
}

const ModalLarge = ({ children, open, onClose, isSuccess }: Props) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) return null;
    return createPortal(
        <Backdrop
            style={{ zIndex: 9999 }}
            open={open}
            className="bg-[#10101055] backdrop-blur-sm"
        >
            <div className="fixed inset-0 z-0 w-dvw h-dvh" onClick={onClose} />
            <div className="relative z-10" onClick={onClose}>
                {children}
            </div>
        </Backdrop>,
        document.body
    );
};

export default ModalLarge;
