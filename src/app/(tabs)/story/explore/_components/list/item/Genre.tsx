import { useContext } from "react";
import { Context } from "./Item";

const Genre = () => {
    const story = useContext(Context);
    return (
        <p className="text-[.75rem] font-sfl uppercase tracking-[2px] text-neutral-400">
            {story.genres[0]}
        </p>
    );
};

export default Genre;
