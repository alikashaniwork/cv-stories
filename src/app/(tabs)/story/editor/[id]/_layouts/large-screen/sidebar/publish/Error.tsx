import { useContext } from "react";
import { Context } from "../../../../EditorProvider";

const Error = ({ onClose }: { onClose: () => void }) => {
    const { poster, pages, rated, language, summary, genres } =
        useContext(Context);
    const posterError = !poster && "Poster";
    const pagesError = pages.length === 0 && "At least 1 page";
    const ratedError = !rated && "Rated";
    const languageError = !language && "Language";
    const summaryError = !summary && "Summary";
    const genresError = genres.length === 0 && "At least 1 genre";
    return (
        <div className="w-[400px] rounded-xl bg-[#333] overflow-hidden">
            <div className="flex items-center justify-between bg-[#444] p-3 px-5">
                <p className="font-sfl tracking-[1px] text-neutral-200">
                    Please add requirement info
                </p>
                <button onClick={onClose}>OK</button>
            </div>
            <div className="*:py-2 *:px-1 px-5 py-2 font-sfr tracking-[1px] text-neutral-300">
                {posterError && <p>{posterError}</p>}
                {pagesError && <p>{pagesError}</p>}
                {ratedError && <p>{ratedError}</p>}
                {languageError && <p>{languageError}</p>}
                {summaryError && <p>{summaryError}</p>}
                {genresError && <p className="!border-none">{genresError}</p>}
            </div>
        </div>
    );
};

export default Error;
