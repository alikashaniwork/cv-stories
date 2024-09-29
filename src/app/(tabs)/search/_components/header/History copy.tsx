"use client";

import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { Context } from "../../_Context";
import useSearchStore from "@/src/queries/search/store";

const History = () => {
    const { keyword, setKeyword } = useContext(Context);
    const searchHistory = useSearchStore((s) => s.searchHistory);
    const setRemoveHistory = useSearchStore((s) => s.setRemoveHistory);
    const setRemoveAllHistory = useSearchStore((s) => s.setRemoveAllHistory);
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleItem = (value: string) => {
        setKeyword(value);
        replace(`${pathname}?query=${value}`);
    };
    return (
        !keyword && (
            <div className="mt-4">
                {searchHistory.length > 0 && (
                    <div className="flex items-center justify-between gap-1">
                        <p className="text-sm text-10 font-sft tracking-[1px]">
                            Search History
                        </p>
                        <button
                            className="text-[.8rem] font-shabmt text-10"
                            onClick={setRemoveAllHistory}
                        >
                            Remove all
                        </button>
                    </div>
                )}
                <ul className="flex flex-col h-[calc(100%-50px)] no-scrollbar overflow-y-auto">
                    {searchHistory.map((item, index) => (
                        <li
                            key={index}
                            className="py-1 flex items-center gap-2"
                        >
                            <button onClick={() => setRemoveHistory(item)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="#333"
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
        )
    );
};

export default History;
