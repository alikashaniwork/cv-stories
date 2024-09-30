import useSearchStore from "@/src/queries/search/store";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { Context } from "../_Context";

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
        <div className="relative flex-[2]">
            {searchHistory.length > 0 && (
                <div className="flex items-center justify-between">
                    <p className="font-sfr text-neutral-300 tracking-wide">
                        History
                    </p>
                    <button
                        className="text-[.85rem] font-sfl"
                        onClick={setRemoveAllHistory}
                    >
                        Clear All
                    </button>
                </div>
            )}
            <ul className="flex w-full flex-col py-2">
                {searchHistory.map((item, index) => (
                    <li
                        key={index}
                        className="py-1 w-full flex items-center gap-2"
                    >
                        <button onClick={() => setRemoveHistory(item)}>
                            <Image
                                width={18}
                                height={18}
                                src="/icons/trash/gray-2.png"
                                alt=""
                            />
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
