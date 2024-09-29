"use client";
import Image from "next/image";
import Item from "./Item";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { Context } from "../../../../EditorProvider";

const Navigation = () => {
    const { _id } = useContext(Context);
    const pathname = usePathname();
    return (
        <ul className="h-[calc(100%-184px)] overflow-y-auto border-y border-[#333]">
            <Item
                title="Details"
                href={`/story/editor/${_id}/main`}
                isActive={pathname.includes("main") ? true : false}
            >
                <span className="bg-gray-800 w-[30px] h-[30px] rounded-full flex items-center justify-center">
                    <Image
                        width={23}
                        height={23}
                        src="/icons/story/details-3.png"
                        alt=""
                    />
                </span>
            </Item>
            <Item
                title="Pages"
                href={`/story/editor/${_id}/page/list`}
                isActive={pathname.includes("page") ? true : false}
            >
                <span className="bg-gray-800 w-[30px] h-[30px] rounded-full flex items-center justify-center">
                    <Image
                        width={19}
                        height={19}
                        src="/icons/story/document.png"
                        alt=""
                    />
                </span>
            </Item>
            <Item
                title="Characters"
                href={`/story/editor/${_id}/characters`}
                isActive={pathname.includes("characters") ? true : false}
            >
                <span className="bg-gray-800 w-[30px] h-[30px] rounded-full flex items-center justify-center">
                    <Image
                        width={20}
                        height={20}
                        src="/icons/story/drama.png"
                        alt=""
                    />
                </span>
            </Item>
            <Item
                title="Locations"
                href={`/story/editor/${_id}/locations`}
                isActive={pathname.includes("locations") ? true : false}
            >
                <span className="bg-gray-800 w-[30px] h-[30px] rounded-full flex items-center justify-center">
                    <Image
                        width={19}
                        height={19}
                        src="/icons/story/placeholder.png"
                        alt=""
                    />
                </span>
            </Item>
        </ul>
    );
};

export default Navigation;
