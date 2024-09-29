"use client";

import ActionResponse from "@/src/app/_components/modules/ActionResponse";
import useEditRated from "@/src/queries/story/editor/details/useEditRated";
import useFetchStoryDetails from "@/src/queries/story/editor/useFetchDetails";
import { CircularProgress } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const options = ["G", "PG", "PG-13", "R", "NC-17"];

const Rated = () => {
    const { id } = useParams<{ id: string }>();
    const { data: story } = useFetchStoryDetails(id);
    const [data, setData] = useState("");
    useEffect(() => {
        story && setData(story.rated || "");
    }, [story]);
    const edit = useEditRated(id);
    const { isPending, isSuccess, error, data: resData, reset } = edit;

    return (
        <>
            <div className="relative w-full h-16 flex items-center justify-between mt-4">
                <span className="absolute left-4 text-neutral-400 font-sfl tracking-[2px]">
                    Rated
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
                    <option>Rated</option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
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

export default Rated;
