import Backdrop from "@/src/app/_components/modules/Backdrop";
import { Page } from "@/src/queries/story/Entities";
import { createContext } from "react";
import Header from "./header/Header";

interface Props {
    page: Page;
    onClose: () => void;
    open: boolean;
}

export const PageDetailsContext = createContext({} as Page);

export default function Details({ page, open, onClose }: Props) {
    return (
        <Backdrop open={open} onClose={onClose}>
            <div className="w-[80vw] h-[95vh] bg-[#333]">
                <PageDetailsContext.Provider value={page}>
                    <Header onClose={onClose} />
                    <p className="p-[4%] px-[8%] text-xl leading-10">
                        {page.content}
                    </p>
                </PageDetailsContext.Provider>
            </div>
        </Backdrop>
    );
}
