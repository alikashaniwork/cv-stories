import { useContext } from "react";
import { Context } from "./Container";

export default function Genres() {
    const { story } = useContext(Context);
    return (
        <ul className="flex items-center flex-wrap gap-3">
            {story?.genres?.map((genre) => (
                <li
                    key={genre}
                    className="text-neutral-400 tracking-[1px] font-sfl text-[.9rem]"
                >
                    {genre}
                </li>
            ))}
        </ul>
    );
}
