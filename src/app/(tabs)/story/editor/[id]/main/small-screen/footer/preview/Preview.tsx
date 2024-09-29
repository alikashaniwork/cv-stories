"use client";
import { useState } from "react";
import Container from "./Container";

export default function Preview() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(!isOpen);
    return (
        <>
            <button
                className="h-full font-sfl tracking-wide bg-neutral-800 rounded-xl"
                onClick={handleOpen}
            >
                Preview
            </button>
            <Container isOpen={isOpen} onClose={handleOpen} />
        </>
    );
}
