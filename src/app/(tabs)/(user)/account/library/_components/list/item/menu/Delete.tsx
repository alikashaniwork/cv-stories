import useDeleteStory from "@/src/queries/story/library/useDelete";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";

interface Props {
    storyId: string;
    onClose: () => void;
}

const Delete = ({ storyId, onClose }: Props) => {
    const deleteStory = useDeleteStory(storyId);
    const { isPending, isSuccess } = deleteStory;
    useEffect(() => {
        isSuccess && onClose();
    }, [isSuccess]);
    return (
        <button
            className="text-neutral-300 text-[.95rem] tracking-[.8px] font-sft w-full justify-between py-[10px] px-4 pr-[14px]"
            onClick={() => deleteStory.mutate()}
            disabled={isPending}
        >
            Delete Story
            {isPending ? (
                <CircularProgress size={15} sx={{ color: "#ff0030" }} />
            ) : (
                <Image
                    width={20}
                    height={20}
                    src="/icons/trash/gray-2.png"
                    alt=""
                />
            )}
        </button>
    );
};

export default Delete;
