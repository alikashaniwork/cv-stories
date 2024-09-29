"use client";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Backdrop from "../Backdrop";

interface Props {
    open: boolean;
    onClose: () => void;
    isSuccess?: boolean;
    children: ReactNode;
}

export default function ModalSmall({ children, open, onClose }: Props) {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) return null;
    return createPortal(
        <Backdrop open={open} onClose={onClose}>
            {children}
        </Backdrop>,
        document.body
    );
}
