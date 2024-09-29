import { useContext } from "react";
import { Context } from "../../../_Context";
import RatingContainer from "./Rating";

const TitleRating = () => {
    const { title, rating } = useContext(Context);
    return (
        <div className="mt-3 py-2 px-4 flex items-center justify-between border-y border-[#1d1d1d]">
            <p className="text-lg">{title}</p>
            <RatingContainer rating={rating} />
        </div>
    );
};

export default TitleRating;
