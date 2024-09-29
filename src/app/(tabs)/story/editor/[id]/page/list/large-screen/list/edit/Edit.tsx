import Backdrop from "@/src/app/_components/modules/Backdrop";
import { Page } from "@/src/queries/story/Entities";
import { createContext, FormEvent, useEffect, useState } from "react";
import Header from "./header/Header";

interface Props {
    page: Page;
    onClose: () => void;
    open: boolean;
}

type IContext = {
    data: Page;
    setData: (data: Page) => void;
    onChange: (e: FormEvent) => void;
};

export const NewPageContext = createContext({} as IContext);

const Edit = ({ page, open, onClose }: Props) => {
    const [data, setData] = useState({
        pageNumber: page.pageNumber,
        content: page.content,
    });

    const handleChagne = (e: FormEvent) => {
        const target = e.target as HTMLInputElement;
        setData({
            ...data,
            [target.name]: target.value,
        });
    };

    useEffect(() => {
        setData({ ...page });
    }, [page]);

    const contextValues = {
        data,
        setData,
        onChange: handleChagne,
    };
    return (
        <Backdrop open={open} onClose={onClose}>
            <div className="w-[80vw] h-[95vh] bg-[#333]">
                <NewPageContext.Provider value={contextValues}>
                    <Header pageId={page._id || ""} onClose={onClose} />
                    <textarea
                        className="w-full h-[calc(100%-48px)] text-2xl leading-10 bg-[unset] border-none p-[4%] px-[8%]"
                        name="content"
                        placeholder="Content of the page ..."
                        value={data.content}
                        onChange={handleChagne}
                    />
                </NewPageContext.Provider>
            </div>
        </Backdrop>
    );
};

export default Edit;
