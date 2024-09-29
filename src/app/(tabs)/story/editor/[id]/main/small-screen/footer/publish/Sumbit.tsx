"use client";

import usePublish from "@/src/queries/story/editor/usePublish";
import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../../../EditorProvider";

const Submit = ({ onClose }: { onClose: () => void }) => {
    const { _id, title } = useContext(Context);
    const publish = usePublish(_id);
    const { isPending } = publish;
    return (
        <div className="w-full h-28 bg-[#333]">
            <p className="w-full h-14 overflow-hidden text-ellipsis text-nowrap text-center text-sm font-sfr capitalize tracking-[.8px] p-4 border-b border-[#444] block">
                Are you sure to Publish {title}?
            </p>
            <div className="flex h-14 *:h-full *:flex-1 *:flex *:justify-center *:items-center">
                <button
                    className="border-r border-[#444] gap-2"
                    onClick={() => publish.mutate()}
                    disabled={isPending}
                >
                    {isPending && <CircularProgress size={15} />}
                    Publish
                </button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default Submit;
