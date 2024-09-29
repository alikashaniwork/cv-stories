"use client";

import ActionResponse from "@/src/app/_components/modules/ActionResponse";
import useEditSummary from "@/src/queries/story/editor/details/useEditSummary";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../EditorProvider";

const Summary = () => {
    const { _id, summary } = useContext(Context);
    const [data, setData] = useState("");
    const edit = useEditSummary(_id);
    const { isPending, isSuccess, error, data: resData, reset } = edit;
    useEffect(() => {
        setData(summary);
    }, [summary]);
    useEffect(() => {
        reset();
    }, [data]);
    return (
        <>
            <div className="w-[80%] h-[140px] overflow-hidden border border-[#444] rounded-2xl mt-4">
                <div className="w-full h-12 border-b border-[#333] px-4 pr-6 flex items-center justify-between">
                    <label
                        className="text-neutral-400 font-sfl tracking-[1px]"
                        htmlFor="summary"
                    >
                        Summary
                    </label>
                    {data !== summary ? (
                        <button
                            onClick={() => edit.mutate(data)}
                            className=""
                            disabled={!data || isPending}
                        >
                            {isPending ? (
                                <CircularProgress size={16} />
                            ) : isSuccess ? (
                                <Image
                                    width={18}
                                    height={18}
                                    src="/icons/other/check-blue.png"
                                    alt=""
                                />
                            ) : (
                                <span>Done</span>
                            )}
                        </button>
                    ) : (
                        summary && (
                            <Image
                                width={18}
                                height={18}
                                src="/icons/check/green.png"
                                alt=""
                            />
                        )
                    )}
                </div>
                <textarea
                    className="bg-[unset] p-2 px-4 text-lg border-none h-[92px] w-full"
                    id="summary"
                    placeholder="e.g. Harry Potter"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
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

export default Summary;
