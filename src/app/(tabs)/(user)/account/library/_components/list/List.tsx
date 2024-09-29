"use client";
import dynamic from "next/dynamic";
const Draft = dynamic(() => import("./Draft"), { ssr: false });
const Published = dynamic(() => import("./Published"), { ssr: false });
const Saved = dynamic(() => import("./Saved"), { ssr: false });

const List = () => {
    return (
        <ul className="relative pt-4 pb-20 lg:pb-4 px-4 lg:px-6 xl:px-[8%] flex flex-col gap-4 md:grid lg:grid-cols-2">
            <Published />

            <Saved />

            <Draft />
        </ul>
    );
};

export default List;
