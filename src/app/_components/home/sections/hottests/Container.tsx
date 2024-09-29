"use client";
import { Story } from "@/src/queries/story/Entities";
import { createContext, useEffect, useRef, useState } from "react";
import QuickView from "../../../quick-view/QuickView";
import LargeItem from "./_LargeItem";
import SmallItem from "./_SmallItem";

type IContext = {
    story: Story | undefined;
    onOpenDetails: (id: string) => void;
};

export const Context = createContext({} as IContext);

interface Props {
    type: string;
    story?: Story;
}

export default function Container({ type, story }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const el = ref.current;

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const elTop = el?.getBoundingClientRect().top || 0;
            if (elTop < window.innerHeight - 100) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [el]);

    const [storyID, setStoryID] = useState("");
    const handleStoryDetails = (id: string) => setStoryID(id);

    const contextValues = { onOpenDetails: handleStoryDetails, story };
    return (
        <>
            <Context.Provider value={contextValues}>
                <div
                    ref={ref}
                    className={`my-[5vh] transition-all duration-[.8s] ease-out
                    ${
                        isActive
                            ? "opacity-1 translate-y-0"
                            : "opacity-0 translate-y-[60px]"
                    } 
                    `}
                >
                    <SmallItem type={type} />
                    <LargeItem type={type} />
                </div>
            </Context.Provider>
            <QuickView
                isOpen={storyID ? true : false}
                onClose={() => handleStoryDetails("")}
                storyID={storyID}
            />
        </>
    );
}
