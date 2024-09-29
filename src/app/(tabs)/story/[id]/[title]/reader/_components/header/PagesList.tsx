"use client";
import { useContext } from "react";
import { createPortal } from "react-dom";
import { Context } from "../../_Context";

const PagesList = () => {
    const { onOpen, onSelect, pages, pagesOpen } = useContext(Context);
    if (typeof document === "undefined") return null;
    return createPortal(
        <div
            className={`hidden md:block transition-all duration-300 ${
                pagesOpen
                    ? "h-[calc(100vh-46px)] overflow-y-auto opacity-1 visible"
                    : "h-0 overflow-hidden opacity-0 invisible"
            } absolute top-12 z-10 w-full bg-[#181818] p-4`}
        >
            <ul className="px-[5%] lg:px-[8%]">
                {pages?.map((page, index) => (
                    <li
                        key={index}
                        className="w-full border-b border-neutral-800 py-3 last:border-none"
                        onClick={() => {
                            onSelect(index + 1);
                            onOpen();
                        }}
                    >
                        <p className="flex items-center gap-2">
                            <span className="uppercase text-neutral-400 tracking-[1px] text-sm font-sfl">
                                Page
                            </span>
                            <span className="text-sm">{index + 1}</span>
                        </p>
                        <p className="w-full text-ellipsis text-nowrap overflow-hidden">
                            {page.content}
                        </p>
                    </li>
                ))}
            </ul>
        </div>,
        document.body
    );
};

export default PagesList;
