import { useContext } from "react";
import { NewPageContext } from "../Edit";

const WordsNumber = () => {
    const {
        data: { content },
    } = useContext(NewPageContext);
    const wordCount = content
        .split(/\s+/)
        .filter((word) => word.length > 0).length;
    return (
        <div className="flex items-center gap-1">
            <p className="text-[.9rem] tracking-[1px] text-neutral-300">
                Words
            </p>
            <p className="text-neutral-200 font-sfb bg-neutral-600 px-4 rounded-xl">
                {wordCount}
            </p>
        </div>
    );
};

export default WordsNumber;
