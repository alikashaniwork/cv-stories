"use client";

import ActionResponse from "@/src/app/_components/modules/ActionResponse";
import useEditLanguage from "@/src/queries/story/editor/details/useEditLanguage";
import useFetchStoryDetails from "@/src/queries/story/editor/useFetchDetails";
import { CircularProgress } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Langauge = () => {
    const { id } = useParams<{ id: string }>();
    const { data: story } = useFetchStoryDetails(id);
    const [data, setData] = useState("");
    useEffect(() => {
        story && setData(story.language || "");
    }, [story]);
    const edit = useEditLanguage(id);
    const { isPending, isSuccess, error, data: resData, reset } = edit;

    return (
        <>
            <div className="relative w-full h-16 flex items-center justify-between mt-4">
                <span className="absolute left-4 text-neutral-400 font-sfl tracking-wider">
                    Langauge
                </span>
                <select
                    style={{
                        textAlignLast: "center",
                    }}
                    className="w-full h-full bg-neutral-800 shadow-sm shadow-black/80 rounded-2xl p-4 text-center text-xl tracking-wider uppercase font-sfb"
                    value={data}
                    onChange={(e) => {
                        setData(e.target.value);
                        edit.mutate(e.target.value);
                    }}
                >
                    <option value="">Language</option>
                    <option value="English">English</option>
                    <option value="Persian">Persian</option>
                    <option value="French">French</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Russian">Russian</option>
                </select>
                <span className="absolute right-4">
                    {isPending && <CircularProgress size={14} />}
                </span>
            </div>
            <ActionResponse
                success={isSuccess}
                error={error?.message || ""}
                message={resData || ""}
                reset={reset}
            />
        </>
    );
};

export default Langauge;
