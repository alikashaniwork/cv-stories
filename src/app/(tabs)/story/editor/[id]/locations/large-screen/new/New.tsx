"use client";
import Image from "next/image";
import { useState } from "react";
import Container from "./Container";

const New = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <>
            <button
                className="gap-2 bg-neutral-700 w-8 h-8 rounded-full"
                onClick={handleOpen}
            >
                <Image
                    width={19}
                    height={19}
                    src="/icons/plus/blue.png"
                    alt=""
                />
            </button>
            <Container open={open} onClose={handleOpen} />
        </>
    );
};

export default New;
