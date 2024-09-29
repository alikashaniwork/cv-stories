"use client";

import useFollowAuthor from "@/src/queries/author/useFollow";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { useContext } from "react";
import { Context } from "../_Context";

const Follow = () => {
    const { data: user } = useFetchUserDetails();
    const { _id } = useContext(Context);
    const follow = useFollowAuthor();
    const alreadyFollowed = user?.followings.includes(_id!);
    return (
        <button
            className="w-full h-12 mt-3 bg-[#282828] rounded-xl text-neutral-200 font-sfr tracking-[1px] uppercase text-[.9rem]"
            onClick={() => follow.mutate(_id!)}
        >
            {alreadyFollowed ? "Unfollow" : "Follow"}
        </button>
    );
};

export default Follow;
