import useSearchStore from "@/src/queries/search/store";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { Context } from "./Context";

const History = () => {
    const { setKeyword } = useContext(Context);
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
        <div className="relative h-[calc(100%-100px)] w-[400px]">
            {searchHistory.length > 0 && (
                <div className="h-10 flex items-center justify-between px-4">
                    <p className="text-sm text-neutral-200 tracking-[1px]">
                        Search History
                    </p>
                    <button
                        className="text-[.85rem] font-shabmt text-10 mb-[2px]"
                        onClick={setRemoveAllHistory}
                    >
                        Remove all
                    </button>
                </div>
            )}
            <ul className="flex w-full flex-col h-[calc(100%-40px)] px-4 no-scrollbar overflow-y-auto">
                {searchHistory.map((item, index) => (
                    <li
                        key={index}
                        className="py-1 w-full flex items-center gap-2"
                    >
                        <button onClick={() => setRemoveHistory(item)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#ff0039"
                                className="bi bi-dash"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                            </svg>
                        </button>
                        <p
                            className="font-sfl text-sm text-10 tracking-[1px] w-full text-wrap overflow-hidden"
                            onClick={() => handleItem(item)}
                        >
                            {item}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default History;
