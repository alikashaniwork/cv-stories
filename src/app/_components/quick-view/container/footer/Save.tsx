"use client";

import LoginRequired from "@/src/app/_components/modules/login-required/LoginRequired";
import useSave from "@/src/queries/story/library/useSave";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Container";

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
            <div>
                <button
                    onClick={handleSave}
                    className="w-9 h-9 rounded-full bg-neutral-700"
                    disabled={save.isPending}
                >
                    <Image
                        width={22}
                        height={22}
                        src={`/icons/story/${
                            isSaved ? "bookmark-fill" : "bookmark"
                        }.png`}
                        alt=""
                    />
                </button>
            </div>
            <LoginRequired open={open} onClose={handleOpen} />
        </>
    );
};

export default Save;
