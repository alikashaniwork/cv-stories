import Actions from "./Actions";
import Author from "./Author";
import Poster from "./Poster";
import RatingContainer from "./Rating";

const Sidebar = () => {
    return (
        <aside className="min-w-[260px] pt-2">
            <Poster />
            <RatingContainer />
            <div className="w-[240px]">
                <Author />
                <Actions />
            </div>
        </aside>
    );
};

export default Sidebar;
