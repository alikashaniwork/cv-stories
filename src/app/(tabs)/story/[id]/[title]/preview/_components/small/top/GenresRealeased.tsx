import { useContext } from "react";
import { Context } from "../../../_Context";

const GenresRealeased = () => {
    const { genres } = useContext(Context);
    return (
        <div className="h-8 px-4 flex items-center justify-between border-b border-[#1d1d1d]">
            <ul className="text-[.9rem] font-sfl text-neutral-400 flex items-center gap-2 tracking-[1px]">
                {genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
            <p className="text-[.9rem] tracking-[1px] font-sfl text-neutral-400">
                {2024}
            </p>
        </div>
    );
};

export default GenresRealeased;
