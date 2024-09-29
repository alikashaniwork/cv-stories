import { useContext } from "react";
import { Context } from "./Container";

export default function Details() {
    const { type, language, rated, pages } = useContext(Context);
    return (
        <div className="flex justify-center gap-6 py-2 border-y border-neutral-700 w-full *:flex *:flex-col *:items-center *:flex-1">
            <div>
                <p className="capitalize">{type}</p>
                <p className="font-sfl tracking-[1px] text-neutral-400 uppercase text-[.82rem]">
                    Type
                </p>
            </div>
            <div>
                <p>{language}</p>
                <p className="font-sfl tracking-[1px] text-neutral-400 uppercase text-[.82rem]">
                    Language
                </p>
            </div>
            <div>
                <p>{rated}</p>
                <p className="font-sfl tracking-[1px] text-neutral-400 uppercase text-[.82rem]">
                    Rated
                </p>
            </div>
            <div>
                <p>{pages.length}</p>
                <p className="font-sfl tracking-[1px] text-neutral-400 uppercase text-[.82rem]">
                    Pages
                </p>
            </div>
        </div>
    );
}
