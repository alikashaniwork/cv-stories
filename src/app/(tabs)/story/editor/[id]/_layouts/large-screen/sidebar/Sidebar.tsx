import dynamic from "next/dynamic";
import Navigation from "./navigation/Navigation";
import Publish from "./publish/Publish";
import SubHeader from "./SubHeader";
const Header = dynamic(() => import("./Header"), { ssr: false });

const Sidebar = () => {
    return (
        <aside className="min-w-[240px] max-w-[240px] lg:min-w-[320px] lg:max-w-[320px] bg-[#222] rounded-tr-xl rounded-br-xl overflow-x-hidden leading-5">
            <Header />
            <SubHeader />
            <Navigation />
            <Publish />
        </aside>
    );
};

export default Sidebar;
