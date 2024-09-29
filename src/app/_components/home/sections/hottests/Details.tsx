import { useContext } from "react";
import { Context } from "./Container";

export default function Details() {
    const { story } = useContext(Context);
    return (
        <div className="flex gap-6 *:flex *:flex-col *:items-center">
            <div>
                <p>{story?.language}</p>
                <p className="font-sfl tracking-[1px] text-neutral-400 uppercase text-[.82rem]">
                    Language
                </p>
            </div>
            <div>
                <p>{story?.rated}</p>
                <p className="font-sfl tracking-[1px] text-neutral-400 uppercase text-[.82rem]">
                    Rated
                </p>
            </div>
            <div>
                <p>{story?.pages?.length}</p>
                <p className="font-sfl tracking-[1px] text-neutral-400 uppercase text-[.82rem]">
                    Pages
                </p>
            </div>
        </div>
    );
}
