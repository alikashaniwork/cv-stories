"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";
const List = dynamic(() => import("../list/List"), { ssr: false });

const Large = () => {
    const [isCollpased, setIsCollpased] = useState(false);
    const handleCollapse = () => setIsCollpased(!isCollpased);
    return (
        <div className="hidden md:block sticky top-0">
            <Header onCollapse={handleCollapse} />
            <div className="flex">
                <div className="p-2">
                    <Sidebar isCollpased={isCollpased} />
                </div>
                <div className="flex-grow">
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Large;
