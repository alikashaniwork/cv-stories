import { useContext } from "react";
import { Context } from "../../_Context";

const Info = () => {
    const { language, rated, pages, genres } = useContext(Context);
    return (
        <div className="*:border-b *:border-neutral-700 last:*:border-none !p-0 *:py-2 *:px-4">
            <div>
                <p className="text-[.85rem] font-sfl text-neutral-500 tracking-[.6px]">
                    Page
                </p>
                <p className="text-[.95rem] text-neutral-200 tracking-[.8px]">
                    {pages.length}
                </p>
            </div>
            <div>
                <p className="text-[.85rem] font-sfl text-neutral-500 tracking-[.6px]">
                    Rated
                </p>
                <p className="text-[.95rem] text-neutral-200 tracking-[.8px]">
                    {rated}
                </p>
            </div>
            <div>
                <p className="text-[.85rem] font-sfl text-neutral-500 tracking-[.6px]">
                    Language
                </p>
                <p className="text-[.95rem] text-neutral-200 tracking-[.8px]">
                    {language}
                </p>
            </div>
            <div>
                <p className="text-[.85rem] font-sfl text-neutral-500 tracking-[.6px]">
                    Genres
                </p>
                <p className="text-[.95rem] text-neutral-200 tracking-[.8px]">
                    {genres.map((genre) => (
                        <span key={genre} className="pr-2">
                            {genre}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default Info;
