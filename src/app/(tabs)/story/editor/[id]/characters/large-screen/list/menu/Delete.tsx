import useDeleteCharacter from "@/src/queries/story/editor/character/useDelete";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { Context } from "../../../../EditorProvider";

interface Props {
    characterId: string;
    onClose: () => void;
}

const Delete = ({ characterId, onClose }: Props) => {
    const { _id } = useContext(Context);
    const deleteCharacter = useDeleteCharacter(_id, characterId);
    const { isPending, isSuccess } = deleteCharacter;
    useEffect(() => {
        isSuccess && onClose();
    }, [isSuccess]);
    return (
        <button
            className="text-neutral-300 text-[.95rem] tracking-[.8px] font-sfl w-full justify-between py-[10px] px-4 pr-[14px]"
            onClick={() => deleteCharacter.mutate()}
            disabled={isPending}
        >
            {isPending && (
                <CircularProgress size={15} sx={{ color: "#ff0030" }} />
            )}
            Remove
            <Image
                width={20}
                height={20}
                src="/icons/trash/gray-2.png"
                alt=""
            />
        </button>
    );
};

export default Delete;
