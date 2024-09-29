import dynamic from "next/dynamic";
import { useContext } from "react";
import { NavContext } from "../../../Context";
import Title from "../Title";
import Genres from "./Genres";
import Languages from "./Languages";
import Rated from "./Rated";
const Backdrop = dynamic(() => import("../../../Backdrop"), { ssr: false });

const Short = () => {
    const { onOpenCategory, categoryOpen } = useContext(NavContext);
    const handleOpen = () => onOpenCategory("short");
    const handleClose = () => onOpenCategory("");
    return (
        <>
            <li
                className="h-12 flex items-center font-sfr justify-center"
                onMouseEnter={handleOpen}
                onMouseLeave={handleClose}
            >
                <Title title="Short" href="short" />
            </li>
            <Backdrop
                open={categoryOpen === "short" ? true : false}
                onClose={() => onOpenCategory("")}
            >
                <div
                    className={`absolute w-full flex *:flex-1 py-16 bg-neutral-800 transition-all duration-300 px-[8%] overflow-y-auto no-scrollbar ${
                        categoryOpen
                            ? "opacity-1 visible h-[60vh]"
                            : "opacity-0 invisible h-0"
                    }`}
                    onMouseEnter={handleOpen}
                    onMouseLeave={handleClose}
                >
                    <Genres />
                    <Languages />
                    <Rated />
                </div>
            </Backdrop>
        </>
    );
};

export default Short;
