"use client";
import { useState } from "react";
import Container from "./container/Container";
import Options from "./Options";

export default function NewStory() {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState("");
    const handleOpen = (value: string) => {
        setIsOpen(!isOpen);
        setType(value);
    };
    return (
        <>
            <Options onOpen={handleOpen} />
            <Container
                open={isOpen}
                onClose={() => setIsOpen(false)}
                type={type}
            />
        </>
    );
}
