"use client";
import Image from "next/image";
import { useState } from "react";
import New from "./new/New";

const Footer = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <>
            <div className="fixed bottom-0 z-10 w-full h-[60px] flex items-center justify-center p-[6px]">
                <button
                    onClick={handleOpen}
                    className="bg-blue-600 w-10 h-10 rounded-full"
                >
                    <Image
                        width={20}
                        height={20}
                        src="/icons/plus/white.png"
                        alt=""
                    />
                </button>
            </div>
            <New open={open} onClose={handleOpen} />
        </>
    );
};

export default Footer;
