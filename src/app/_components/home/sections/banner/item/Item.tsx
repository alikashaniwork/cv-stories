import { Story } from "@/src/queries/story/Entities";
import Bottom from "./Bottom";
import Genres from "./Genres";
import Poster from "./Poster";
import Tagline from "./Tagline";
import Title from "./Title";

interface Props {
    onOpenDetails: (id: string) => void;
    story: Story;
}

const Item = ({ onOpenDetails, story }: Props) => {
    return (
        <div className="w-full h-full flex flex-wrap items-center justify-start gap-0 lg:gap-6">
            <div
                className="w-full lg:w-[320px] h-[400px] lg:h-full"
                onClick={() => onOpenDetails(story?._id!)}
            >
                <Poster poster={story.poster} />
            </div>

            <div className="hidden h-full flex-grow lg:flex flex-col justify-around pr-[8%]">
                <div
                    className="flex-grow pt-8"
                    onClick={() => onOpenDetails(story?._id!)}
                >
                    <Tagline tagline={story.tagline} />
                    <div className="mt-4">
                        <Title title={story.title} />
                        <Genres genres={story.genres} />
                    </div>
                </div>
                <Bottom story={story} />
            </div>
        </div>
    );
};

export default Item;
