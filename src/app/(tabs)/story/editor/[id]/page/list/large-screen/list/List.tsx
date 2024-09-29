"use client";

import Empty from "@/src/app/_components/modules/Empty";
import { Page } from "@/src/queries/story/Entities";
import { useContext, useState } from "react";
import { Context } from "../../../../EditorProvider";
import Details from "./details/Details";
import Edit from "./edit/Edit";
import MenuContainer from "./menu/Menu";

const List = () => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const [openEdit, setOpenEdit] = useState(false);

    const [pageDetails, setPageDetails] = useState({
        _id: "",
        pageNumber: 1,
        content: "",
    });

    const handleOpenDetails = (page: Page, index: number) => {
        setIsDetailsOpen(!isDetailsOpen);
        setPageDetails({
            _id: page._id || "",
            pageNumber: index + 1,
            content: page.content,
        });
    };

    const handleOpen = (page: Page, index: number) => {
        setOpenEdit(!openEdit);
        setPageDetails({
            _id: page._id || "",
            pageNumber: index + 1,
            content: page.content,
        });
    };

    const { pages } = useContext(Context);

    const limitedContent = (value: string): string => {
        return value.length > 200 ? `${value.slice(0, 200)} ...` : value;
    };

    return (
        <>
            <Empty message="No Page!" length={pages.length} padding="20px" />
            <ul className="grid grid-cols-2 gap-4 p-4">
                {pages.map((page, index) => (
                    <li
                        key={index}
                        className="h-32 bg-[#333] rounded-xl"
                        onClick={() => handleOpenDetails(page, index)}
                    >
                        <div className="h-10 flex items-center justify-between px-4">
                            <p className="flex items-center gap-1">
                                <span className="uppercase text-sm text-neutral-400 tracking-[2px] mt-[1.5px] font-sft">
                                    Page
                                </span>
                                <span className="font-sfblack text-neutral-300 text-lg">
                                    {index + 1}
                                </span>
                            </p>
                            <MenuContainer
                                pageId={page._id!}
                                onOpen={() => handleOpen(page, index)}
                            />
                        </div>
                        <p className="w-full h-20 overflow-hidden text-ellipsis text-wrap px-4 pb-4 leading-7">
                            {limitedContent(page.content)}
                        </p>
                    </li>
                ))}
            </ul>
            <Edit
                page={pageDetails}
                open={openEdit}
                onClose={() => setOpenEdit(false)}
            />
            <Details
                page={pageDetails}
                open={isDetailsOpen}
                onClose={() => setIsDetailsOpen(false)}
            />
        </>
    );
};

export default List;
