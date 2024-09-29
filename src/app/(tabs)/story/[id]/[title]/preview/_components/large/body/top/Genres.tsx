import { useContext } from "react";
import { Context } from "../../../../_Context";

const Genres = () => {
    const { genres } = useContext(Context);
    return (
        <ul className="flex items-center justify-center gap-4">
            {genres.map((genre) => (
                <li
                    key={genre}
                    className="uppercase tracking-[1px] text-[.9rem] text-neutral-300"
                >
                    {genre}
                </li>
            ))}
        </ul>
    );
};

export default Genres;
