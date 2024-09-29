"use client";

import useCreatePage from "@/src/queries/story/editor/page/useCreate";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { Context } from "../_Context";

const Header = () => {
    const router = useRouter();
    const { id } = useParams<{ id: string }>();
    const { data } = useContext(Context);
    const create = useCreatePage(id);
    const { isPending, isSuccess } = create;
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
                <p className="justify-center tracking-[.5px] font-sfb text-lg text-neutral-200">
                    New Page
                </p>
                <div className="justify-end gap-3">
                    <button
                        className="gap-2 text-blue-600 text-[1.05rem] tracking-[1px]"
                        onClick={() => create.mutate(data)}
                        disabled={isPending || !data.content}
                    >
                        {isPending && <CircularProgress size={14} />}
                        Done
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;
