import Genres from "./genres/Genres";
import Langauge from "./Langauge";
import Rated from "./Rated";
import Summary from "./Summary";
import Title from "./Title";

const Details = () => {
    return (
        <div className="flex-[3] pt-1 pr-4 lg:pr-[8%] min-[1200px]:pr-[12%] *:w-full">
            <Title />
            <Genres />
            <Langauge />
            <Rated />
            <Summary />
        </div>
    );
};

export default Details;
