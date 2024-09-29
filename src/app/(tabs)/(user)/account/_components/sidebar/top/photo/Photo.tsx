import Backdrop from "@/src/app/_components/modules/Backdrop";
import { useState } from "react";
import ContextProvider from "./_Context";
import Avatar from "./Avatar";
import Edit from "./edit/Edit";

const Photo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(!isOpen);
    return (
        <ContextProvider>
            <div
                className="relative w-14 h-14 flex flex-col items-center"
                onClick={handleOpen}
            >
                <Avatar />
                <div className="absolute bottom-0 right-[2px] w-4 h-4 flex items-center justify-center rounded-full border border-neutral-600 bg-blue">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        className="bi bi-plus"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                </div>
            </div>
            <Backdrop open={isOpen} onClose={handleOpen}>
                <Edit onClose={handleOpen} />
            </Backdrop>
        </ContextProvider>
    );
};

export default Photo;
