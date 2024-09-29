"use client";
import { useContext } from "react";
import { createPortal } from "react-dom";
import { Context } from "../../_Context";

const Pages = () => {
    const { onOpen, onSelect, pages, pagesOpen } = useContext(Context);
    if (typeof document === "undefined") return null;
    return createPortal(
        <div
            className={`md:hidden no-scrollbar transition-all duration-300 ${
                pagesOpen
                    ? "h-[calc(100vh-46px)] overflow-y-auto opacity-1 visible"
                    : "h-0 overflow-hidden opacity-0 invisible"
            } absolute bottom-0 z-10 w-full bg-[#181818] p-4 pb-12`}
        >
            <ul className="">
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

export default Pages;
