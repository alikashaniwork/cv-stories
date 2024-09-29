"use client";

import { useContext, useState } from "react";
import { Context } from "../../../../EditorProvider";
import Error from "./Error";
import Submit from "./Sumbit";
import ModalLarge from "@/src/app/_components/modules/Modal";

const Publish = () => {
    const { poster, pages, rated, language, summary, genres } =
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
        <>
            <div className="p-2 h-16">
                <button
                    className="w-full h-full gap-2 bg-rose-600 rounded-2xl font-sfbold text-lg tracking-[.8px] text-white disabled:bg-[#222222]"
                    onClick={() => setModalOpen(true)}
                >
                    Publish
                </button>
            </div>
            <ModalLarge open={modalOpen} onClose={() => setModalOpen(false)}>
                {isError ? (
                    <Error onClose={() => setModalOpen(false)} />
                ) : (
                    <Submit onClose={() => setModalOpen(false)} />
                )}
            </ModalLarge>
        </>
    );
};

export default Publish;
