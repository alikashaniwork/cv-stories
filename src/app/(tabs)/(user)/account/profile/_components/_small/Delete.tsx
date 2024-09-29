"use client";
import ModalLarge from "@/src/app/_components/modules/Modal";
import useDeleteAccount from "@/src/queries/user/profile/useDelete";
import { CircularProgress } from "@mui/material";
import { useState } from "react";

const Delete = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const deleteAccount = useDeleteAccount();
    const { isPending } = deleteAccount;
    return (
        <div className="px-4">
            <button
                className="h-14 mb-20 bg-neutral-800 w-full mt-4 rounded-xl text-rose-500"
                onClick={handleOpen}
            >
                {isPending && (
                    <CircularProgress size={15} sx={{ color: "#ff5555" }} />
                )}
                Delete Account
            </button>
            <ModalLarge open={open} onClose={handleOpen}>
                <div className="w-[320px] h-36 bg-[#444] rounded-2xl">
                    <div className="h-20 flex flex-col items-center justify-center border-b border-[#555]">
                        <p className="font-sfr tracking-[.5px]">
                            Delete Account?
                        </p>
                        <p className="text-sm text-neutral-300 tracking-[.5px]">
                            Also all your stories will be deleted too!
                        </p>
                    </div>
                    <div className="h-16 flex *:flex-1">
                        <button
                            className="gap-2 border-r border-[#555] text-red-500"
                            onClick={() => deleteAccount.mutate()}
                            disabled={isPending}
                        >
                            {isPending && (
                                <CircularProgress
                                    size={15}
                                    sx={{ color: "#ff0030" }}
                                />
                            )}
                            Delete Account
                        </button>
                        <button onClick={handleOpen}>Cancel</button>
                    </div>
                </div>
            </ModalLarge>
        </div>
    );
};

export default Delete;
