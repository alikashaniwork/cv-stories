"use client";

import LoginRequired from "@/src/app/_components/modules/login-required/LoginRequired";
import useSave from "@/src/queries/story/library/useSave";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useContext, useState } from "react";
import { Context } from "../../../_Context";

const Save = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const { data: user } = useFetchUserDetails();
    const { _id } = useContext(Context);
    const alreadySaved = user?.saved?.find((s) => s === _id);
    const save = useSave(_id);
    const queryClient = useQueryClient();
    const handleSave = () => {
        if (user) {
            if (alreadySaved) {
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
                className="bg-neutral-800 min-w-10 max-w-10 min-h-10 max-h-10 rounded-full"
                disabled={save.isPending}
            >
                {alreadySaved ? (
                    <Image
                        width={20}
                        height={20}
                        src="/icons/story/bookmark-fill.png"
                        alt=""
                    />
                ) : (
                    <Image
                        width={20}
                        height={20}
                        src="/icons/story/bookmark.png"
                        alt=""
                    />
                )}
            </button>
            <LoginRequired open={open} onClose={handleOpen} />
        </>
    );
};

export default Save;
