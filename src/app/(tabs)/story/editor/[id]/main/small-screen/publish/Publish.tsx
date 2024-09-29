"use client";

import Backdrop from "@/src/app/_components/modules/Backdrop";
import { useContext, useState } from "react";
import { Context } from "../../../EditorProvider";
import Error from "./Error";
import Submit from "./Sumbit";

const Publish = () => {
    const { type, poster, pages, rated, language, summary, genres } =
        useContext(Context);
    const [modalOpen, setModalOpen] = useState(false);
    const isError =
        !poster ||
        pages.length === 0 ||
        !rated ||
        !language ||
        !summary ||
        genres.length === 0;
    return (
        type !== "series" && (
            <>
                <div className="fixed bottom-0 z-10 w-full h-[65px] p-[6px]">
                    <button
                        className="w-full h-full gap-2 bg-rose-600 rounded-2xl font-sfbold text-lg tracking-[.8px] text-white disabled:bg-[#222222]"
                        onClick={() => setModalOpen(true)}
                    >
                        Publish
                    </button>
                </div>
                <Backdrop open={modalOpen} onClose={() => setModalOpen(false)}>
                    {isError ? (
                        <Error onClose={() => setModalOpen(false)} />
                    ) : (
                        <Submit onClose={() => setModalOpen(false)} />
                    )}
                </Backdrop>
            </>
        )
    );
};

export default Publish;
