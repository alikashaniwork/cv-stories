"use client";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Rating } from "@mui/material";

interface Props {
    reviews?: number;
    rating: number;
}

const RatingContainer = ({ reviews = 55, rating = 4 }: Props) => {
    return (
        <div className="flex items-center justify-start gap-1 -ml-[2px] mt-[2px]">
            <Rating
                readOnly
                name="rating"
                value={rating}
                precision={0.5}
                sx={{ gap: "1px", direction: "ltr", fontSize: "1rem" }}
                emptyIcon={
                    <StarRoundedIcon
                        style={{ opacity: 1, color: "#444" }}
                        fontSize="inherit"
                    />
                }
                icon={
                    <StarRoundedIcon
                        style={{ color: "#888" }}
                        fontSize="inherit"
                    />
                }
            />
            <p className="text-[.9rem] text-[#aaa] font-sfl">
                {reviews === 0 ? (
                    <span className="text-[.8rem] text-[#888] font-sfl px-1">
                        No Vote
                    </span>
                ) : (
                    <span className="font-sfl text-[.8rem] tracking-[1px]">
                        {reviews}
                    </span>
                )}
            </p>
        </div>
    );
};

export default RatingContainer;
