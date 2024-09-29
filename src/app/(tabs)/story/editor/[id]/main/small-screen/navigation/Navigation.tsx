"use client";
import Image from "next/image";
import Item from "./Item";
import { useContext } from "react";
import { Context } from "../../../EditorProvider";

const Navigation = () => {
    const { type } = useContext(Context);
    return (
        <ul className="p-4 pb-20">
            <Item
                title="Details"
                description="Genres, Rated, Language, Summary"
                href="details"
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
            {type !== "series" && (
                <Item
                    title="Pages"
                    description="At least 1 Page"
                    href="page/list"
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
            )}
            <Item title="Characters" description="Optional" href="characters">
                <span className="bg-gray-800 w-[30px] h-[30px] rounded-full flex items-center justify-center">
                    <Image
                        width={20}
                        height={20}
                        src="/icons/story/drama.png"
                        alt=""
                    />
                </span>
            </Item>
            <Item title="Locations" description="Optional" href="locations">
                <span className="bg-gray-800 w-[30px] h-[30px] rounded-full flex items-center justify-center">
                    <Image
                        width={19}
                        height={19}
                        src="/icons/story/placeholder.png"
                        alt=""
                    />
                </span>
            </Item>
            {type === "series" && (
                <Item title="Seasons" href="seasons">
                    <span className="bg-gray-800 w-[30px] h-[30px] rounded-full flex items-center justify-center">
                        <Image
                            width={19}
                            height={19}
                            src="/icons/story/placeholder.png"
                            alt=""
                        />
                    </span>
                </Item>
            )}
        </ul>
    );
};

export default Navigation;
