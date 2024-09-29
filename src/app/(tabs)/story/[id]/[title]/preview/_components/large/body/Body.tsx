import SimilarStories from "../../similar-stories/SimilarStories";
import Characters from "./Characters";
import Details from "./Details";
import Locations from "./Locations";
import Summary from "./Summary";
import Top from "./top/Top";

const Body = () => {
    return (
        <div className="flex-grow bg-[#222222] rounded-2xl">
            <Top />

            <div className="p-4 pt-0 px-6">
                <Details />

                <Summary />

                <div className="flex gap-20 py-4 border-b border-[#222]">
                    <Characters />
                    <Locations />
                </div>
            </div>

            <SimilarStories />
        </div>
    );
};

export default Body;
