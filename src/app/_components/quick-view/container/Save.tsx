"use client";

import LoginRequired from "@/src/app/_components/modules/login-required/LoginRequired";
import useSave from "@/src/queries/story/library/useSave";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Context } from "./Container";

const Save = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const { data: user } = useFetchUserDetails();
    const { _id } = useContext(Context);

    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        if (user) {
            setIsSaved(user?.saved?.find((s) => s === _id) ? true : false);
        }
    }, [user]);

    const save = useSave(_id);
    const queryClient = useQueryClient();
    const handleSave = () => {
        if (user) {
            if (isSaved) {
                const updatedUser = {
                    ...user,
                    saved: user?.saved?.filter((s) => s !== _id),
                };
                queryClient.setQueryData(["user-details"], updatedUser);
            } else {
                const updatedUser = {
                    ...user,
                    saved: [_id, ...(user?.saved || [])],
                };
                queryClient.setQueryData(["user-details"], updatedUser);
            }
            save.mutateAsync();
        } else handleOpen();
    };
    return (
        <>
            <button
                onClick={handleSave}
                className="w-full justify-between mt-2 px-6 pr-[23px] bg-[#333] text-white font-sfr rounded-2xl h-14 gap-2 text-[1.08rem] tracking-[.5px]"
                disabled={save.isPending}
            >
                <span className="pt-[1.5px] text-base">
                    {isSaved ? "Remove From Library" : "Add To Library"}
                </span>
                <Image
                    width={24}
                    height={24}
                    src={`/icons/story/${
                        isSaved ? "bookmark-fill" : "bookmark"
                    }.png`}
                    alt=""
                />
            </button>
            <LoginRequired open={open} onClose={handleOpen} />
        </>
    );
};

export default Save;
