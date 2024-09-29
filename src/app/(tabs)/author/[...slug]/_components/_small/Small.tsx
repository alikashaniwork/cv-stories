import dynamic from "next/dynamic";
import Name from "../Name";
import Numbers from "../Numbers";
import Photo from "../Photo";
import Username from "../Username";
import Stories from "./stories/Stories";
const Header = dynamic(() => import("./Header"), { ssr: false });

const Small = () => {
    return (
        <div className="md:hidden">
            <Header />
            <div className="bg-[#1a1a1a] flex flex-col items-center py-4">
                <Photo />
                <Name />
                <Username />
                <Numbers />
            </div>
            <Stories />
        </div>
    );
};

export default Small;
