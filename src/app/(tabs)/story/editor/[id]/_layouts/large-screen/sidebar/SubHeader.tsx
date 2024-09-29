"use client";
import { useContext } from "react";
import { Context } from "../../../EditorProvider";

const SubHeader = () => {
    const { title, type } = useContext(Context);
    return (
        <div className="h-16 flex items-center justify-between px-4">
            <p className="w-full text-wrap font-sfbold text-xl">{title}</p>
            <p className="min-w-[70px] max-w-[70px] flex items-center justify-end uppercase font-sfbold text-[.92rem] tracking-wider text-neutral-400">
                {type}
            </p>
        </div>
    );
};

export default SubHeader;
