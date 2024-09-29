"use client";

import ActionResponse from "@/src/app/_components/modules/ActionResponse";
import useEditRated from "@/src/queries/story/editor/details/useEditRated";
import useFetchStoryDetails from "@/src/queries/story/editor/useFetchDetails";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
            <div className="border border-[#444] rounded-2xl relative w-full h-16 flex items-center justify-between mt-4">
                <span className="absolute left-4 text-neutral-400 font-sfl tracking-[1px]">
                    Rated
                </span>
                <select
                    style={{
                        textAlignLast: "center",
                    }}
                    className="w-full h-full bg-[unset] rounded-2xl p-4 text-center text-xl tracking-[2px] uppercase font-sfb"
                    value={data}
                    onChange={(e) => {
                        setData(e.target.value);
                        edit.mutate(e.target.value);
                    }}
                    defaultValue="G"
                >
                    <option>Rated</option>
                    <option value="G">G</option>
                    <option value="PG">PG</option>
                    <option value="PG-13">PG-13</option>
                    <option value="R">R</option>
                    <option value="NC-17">NC-17</option>
                </select>
                <span className="absolute right-6">
                    {isPending ? (
                        <CircularProgress size={14} />
                    ) : isSuccess ? (
                        <Image
                            width={18}
                            height={18}
                            src="/icons/other/check-blue.png"
                            alt=""
                        />
                    ) : (
                        story?.rated && (
                            <Image
                                width={18}
                                height={18}
                                src="/icons/check/green.png"
                                alt=""
                            />
                        )
                    )}
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
