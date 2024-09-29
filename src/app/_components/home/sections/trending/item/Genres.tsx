import { useContext } from "react";
import { Context } from "./Item";

const Genres = () => {
    const { genres } = useContext(Context);
    return (
        <ul className="flex items-center gap-2 mt-1">
            {genres?.map((genre) => (
                <li
                    key={genre}
                    className="uppercase text-sm tracking-[1px] text-neutral-300"
                >
                    {genre}
                </li>
            ))}
        </ul>
    );
};

export default Genres;
