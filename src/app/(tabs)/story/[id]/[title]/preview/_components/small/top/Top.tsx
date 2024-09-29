import GenresRealeased from "./GenresRealeased";
import Poster from "./Poster";
import TitleRating from "./TitleRating";

const Top = () => {
    return (
        <div className="bg-[#181818] pt-3 mt-12">
            <Poster />
            <TitleRating />
            <GenresRealeased />
        </div>
    );
};

export default Top;
