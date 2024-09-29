const List = dynamic(() => import("../list/List"), { ssr: false });
const Genres = dynamic(() => import("./Genres"), { ssr: false });
const Header = dynamic(() => import("./header/Header"), { ssr: false });
import dynamic from "next/dynamic";
import Toolbar from "./toolbar/Toolbar";

const Small = () => {
    return (
        <div className="md:hidden">
            <Header />
            <Toolbar />
            <Genres />
            <List />
        </div>
    );
};

export default Small;
