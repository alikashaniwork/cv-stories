"use client";

import ActionResponse from "@/src/app/_components/modules/ActionResponse";
import useEditTitle from "@/src/queries/story/editor/details/useEditTitle";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../EditorProvider";

const Title = () => {
    const { _id, title } = useContext(Context);
    const [data, setData] = useState("");
    const edit = useEditTitle(_id);
    const { isPending, isSuccess, error, data: resData, reset } = edit;
    useEffect(() => {
        setData(title);
    }, [title]);
    useEffect(() => {
        reset();
    }, [data]);
    return (
        <>
            <div className="w-[80%] h-[60px] flex items-center justify-between overflow-hidden border border-[#444] rounded-2xl">
                <label
                    className=" min-w-20 h-full flex items-center justify-center text-neutral-400 font-sfl tracking-[1px]"
                    htmlFor="title"
                >
                    Title
                </label>
                <input
                    className="bg-[unset] pl-6 text-2xl border-none h-full w-full"
                    id="title"
                    type="text"
                    placeholder="e.g. Harry Potter"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
                {data !== title ? (
                    <button
                        onClick={() => edit.mutate(data)}
                        className="min-w-[65px] h-full"
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
                    title && (
                        <Image
                            width={18}
                            height={18}
                            src="/icons/check/green.png"
                            alt=""
                            className="mr-6"
                        />
                    )
                )}
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

export default Title;
