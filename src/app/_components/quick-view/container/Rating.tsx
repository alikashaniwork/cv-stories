"use client";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Rating } from "@mui/material";
import { useContext } from "react";
import { Context } from "./Container";

const RatingContainer = () => {
    const { rating, reviews } = useContext(Context);
    return (
        <div className="flex items-center justify-center gap-1 mt-1">
            <Rating
                readOnly
                name="rating"
                value={rating}
                precision={0.5}
                sx={{ gap: "1px", direction: "ltr", fontSize: "1.6rem" }}
                emptyIcon={
                    <StarRoundedIcon
                        style={{ opacity: 1, color: "#555" }}
                        fontSize="inherit"
                    />
                }
                icon={
                    <StarRoundedIcon
                        style={{ color: "gold" }}
                        fontSize="inherit"
                    />
                }
            />
            <p className="text-[.9rem] text-[#aaa] font-sfl">
                {reviews?.length === 0 ? (
                    <span className="text-[.8rem] text-neutral-500 font-sfl px-1">
                        No Vote
                    </span>
                ) : (
                    <span className="font-sfl text-[.8rem] tracking-[1px]">
                        {reviews?.length === 0 ? "No Vote" : reviews?.length}
                    </span>
                )}
            </p>
        </div>
    );
};

export default RatingContainer;
