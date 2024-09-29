import { useContext } from "react";
import { Context } from "../../../_Context";

const Details = () => {
    const { language, rated, pages } = useContext(Context);
    return (
        <div className="flex items-center gap-14 py-4 border-b border-neutral-700">
            <div>
                <p className="font-sfl tracking-[1px] text-neutral-400 text-[.95rem]">
                    Language
                </p>
                <p className="uppercase font-sfr tracking-[1.5px] pt-[2px]">
                    {language}
                </p>
            </div>
            <div>
                <p className="font-sfl tracking-[1px] text-neutral-400 text-[.95rem]">
                    Rated
                </p>
                <p className="uppercase font-sfr tracking-[1.5px] pt-[2px]">
                    {rated}
                </p>
            </div>
            <div>
                <p className="font-sfl tracking-[1px] text-neutral-400 text-[.95rem]">
                    Pages
                </p>
                <p className="uppercase font-sfr tracking-[1.5px] pt-[2px]">
                    {pages.length}
                </p>
            </div>
        </div>
    );
};

export default Details;
