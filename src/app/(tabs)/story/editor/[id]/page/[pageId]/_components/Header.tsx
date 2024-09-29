"use client";

import useEditPage from "@/src/queries/story/editor/page/useEdit";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { Context } from "../_Context";

const Header = () => {
    const router = useRouter();
    const { pageId } = useParams<{ pageId: string }>();
    const { id } = useParams<{ id: string }>();
    const { data } = useContext(Context);
    const edit = useEditPage(id, pageId);
    const { isPending, isSuccess } = edit;
    useEffect(() => {
        isSuccess && router.push("list");
    }, [isSuccess]);

    return (
        <>
            <header className="w-full h-12 flex items-center justify-between bg-[#18181855] backdrop-blur-xl border-b border-[#181818] px-4 *:flex *:items-center *:flex-1">
                <div>
                    <Link
                        href="list"
                        className="font-sfl text-white tracking-wider"
                    >
                        <Image
                            width={20}
                            height={20}
                            src="/icons/arrow/left-second.png"
                            alt=""
                        />
                        Pages
                    </Link>
                </div>
                <p className="justify-center tracking-wider font-sfb text-lg text-neutral-200">
                    Edit Page
                </p>
                <div className="justify-end gap-3">
                    <button
                        className="gap-2 text-blue font-sfl tracking-[1px]"
                        onClick={() => edit.mutate(data)}
                        disabled={isPending || !data.content}
                    >
                        {isPending && <CircularProgress size={14} />}
                        Save
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;
