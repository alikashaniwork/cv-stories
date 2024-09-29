import useDeletePage from "@/src/queries/story/editor/page/useDelete";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { Context } from "../../../../../EditorProvider";

interface Props {
    pageId: string;
    onClose: () => void;
}

const Delete = ({ pageId, onClose }: Props) => {
    const { _id } = useContext(Context);
    const deletePage = useDeletePage(_id, pageId);
    const { isPending, isSuccess } = deletePage;
    useEffect(() => {
        isSuccess && onClose();
    }, [isSuccess]);
    return (
        <button
            className="text-neutral-300 text-[.95rem] tracking-[.8px] font-sfl w-full justify-between py-[10px] px-4 pr-[14px]"
            onClick={() => deletePage.mutate()}
            disabled={isPending}
        >
            Remove
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
