"use client";

import useSearchStore from "@/src/queries/search/store";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { Context } from "../../_Context";
import Backdrop from "./Backdrop";

const History = () => {
    const pathname = usePathname();
    const { replace } = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(!isOpen);

    const { keyword, setKeyword } = useContext(Context);

    const searchHistory = useSearchStore((s) => s.searchHistory);

    const setRemoveHistory = useSearchStore((s) => s.setRemoveHistory);
    const setRemoveAllHistory = useSearchStore((s) => s.setRemoveAllHistory);

    const handleItem = (value: string) => {
        setKeyword(value);
        replace(`${pathname}?query=${value}`);
    };
    return (
        !keyword && (
            <>
                <button
                    className="gap-2 font-sfl text-[.95rem] tracking-wide"
                    onClick={handleOpen}
                >
                    History
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className={`bi bi-chevron-down mt-[3px] transition-all duration-300
                        ${isOpen ? "rotate-180" : ""}    
                        `}
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                        />
                    </svg>
                </button>
                <Backdrop isOpen={isOpen} onClose={handleOpen}>
                    <div
                        className={`absolute z-20 w-full px-4 bg-[#181818] transition-all duration-500
                        ${
                            isOpen
                                ? "visible opacity-1 h-[60vh]"
                                : "opacity-0 invisible h-[0] overflow-hidden"
                        }    
                    `}
                    >
                        {searchHistory.length !== 0 && (
                            <button
                                className="font-sfl text-[.95rem] tracking-wide"
                                onClick={setRemoveAllHistory}
                            >
                                Clear All
                            </button>
                        )}
                        <ul className="flex flex-col py-2 no-scrollbar overflow-y-auto">
                            {searchHistory.map((item, index) => (
                                <li
                                    key={index}
                                    className="py-1 flex items-center gap-2"
                                >
                                    <button
                                        onClick={() => setRemoveHistory(item)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="#999"
                                            className="bi bi-dash"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                                        </svg>
                                    </button>
                                    <p
                                        className="font-sfl text-sm text-10 tracking-[1px]"
                                        onClick={() => handleItem(item)}
                                    >
                                        {item}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Backdrop>
            </>
        )
    );
};

export default History;
