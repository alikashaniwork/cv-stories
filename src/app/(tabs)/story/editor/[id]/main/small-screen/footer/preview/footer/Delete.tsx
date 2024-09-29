import Image from "next/image";
import { useContext, useEffect } from "react";
import { Context } from "../../../../../EditorProvider";
import useDeleteStory from "@/src/queries/story/library/useDelete";
import { useRouter } from "next/navigation";
import ActionResponse from "@/src/app/_components/modules/ActionResponse";
import { CircularProgress } from "@mui/material";

export default function Delete() {
    const { replace } = useRouter();
    const { _id } = useContext(Context);
    const deleteStory = useDeleteStory(_id);
    const { isPending, isSuccess, error, data, reset } = deleteStory;
    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                replace("/");
            }, 2000);
            return () => clearInterval(timer);
        }
    }, [isSuccess]);

    return (
        <>
            <button
                className="w-9 h-9 pt-[2px] rounded-full bg-neutral-700"
                onClick={() => deleteStory.mutate()}
            >
                {isPending ? (
                    <CircularProgress size={15} sx={{ color: "#ff0030" }} />
                ) : (
                    <Image
                        width={21}
                        height={21}
                        src="/icons/trash/w2.png"
                        alt=""
                    />
                )}
            </button>
            <ActionResponse
                success={isSuccess}
                error={error?.message || ""}
                message={data || ""}
                reset={reset}
            />
        </>
    );
}
