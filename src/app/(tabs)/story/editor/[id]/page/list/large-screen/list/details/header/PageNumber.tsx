import { useContext } from "react";
import { PageDetailsContext } from "../Details";

export default function PageNumber() {
    const { pageNumber } = useContext(PageDetailsContext);
    return (
        <div className="flex items-center gap-1">
            <p className=" text-[.9rem] tracking-[1px] text-neutral-300">
                Page Number
            </p>
            <p className="text-neutral-200 font-sfb bg-neutral-600 px-4 rounded-xl">
                {pageNumber}
            </p>
        </div>
    );
}
