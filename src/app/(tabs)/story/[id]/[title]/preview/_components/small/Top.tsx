import { useContext } from "react";
import { Context } from "../../_Context";
import RatingContainer from "./top/Rating";

const Top = () => {
    const { title, rating } = useContext(Context);
    return (
        <div className="px-4 pt-2 flex items-center justify-between">
            <p className="text-lg">{title}</p>
            <RatingContainer rating={rating} />
        </div>
    );
};

export default Top;
