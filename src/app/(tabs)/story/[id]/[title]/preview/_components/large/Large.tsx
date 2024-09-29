"use client";
import Body from "./body/Body";
import Sidebar from "./sidebar/Sidebar";

const Large = () => {
    return (
        <div className="hidden lg:flex h-[calc(100vh-48px)] gap-2 p-2 *:h-full *:overflow-y-auto *:no-scrollbar px-[8%]">
            <Sidebar />
            <Body />
        </div>
    );
};

export default Large;
