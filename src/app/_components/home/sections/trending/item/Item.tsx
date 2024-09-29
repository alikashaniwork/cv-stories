import { Story } from "@/src/queries/story/Entities";
import { createContext } from "react";
import Bottom from "./bottom/Bottom";
import Genres from "./Genres";
import Heading from "./Heading";
import Poster from "./Poster";
import Title from "./Title";

interface Props {
    onOpenDetails: (id: string) => void;
    story: Story;
}

export const Context = createContext({} as Story);

const Item = ({ onOpenDetails, story }: Props) => {
    return (
        <div className="landscape:flex-nowrap w-full h-full flex flex-wrap items-center justify-start gap-2 lg:gap-6 p-4 lg:px-0 *:min-w-[300px] *:max-w-[380px]">
            <Context.Provider value={story}>
                <div
                    className="w-full"
                    onClick={() => onOpenDetails(story._id)}
                >
                    <Poster />
                </div>
                <div className="lg:!min-w-[calc(100%-400px)]">
                    <div onClick={() => onOpenDetails(story._id)}>
                        <Heading />
                        <div className="px-1 lg:px-0 py-4 lg:py-10">
                            <Title />
                            <Genres />
                        </div>
                    </div>
                    <Bottom />
                </div>
            </Context.Provider>
        </div>
    );
};

export default Item;
