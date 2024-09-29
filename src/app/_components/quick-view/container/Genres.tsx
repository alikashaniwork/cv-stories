import { useContext } from "react";
import { Context } from "./Container";

export default function Genres() {
    const { genres } = useContext(Context);
    return (
        <ul className="flex items-center flex-wrap gap-2 px-[2px]">
            {genres?.map((genre) => (
                <li
                    key={genre}
                    className="uppercase text-neutral-400 tracking-[1.5px] font-sfl text-sm lg:text-[.95rem]"
                >
                    {genre}
                </li>
            ))}
        </ul>
    );
}
