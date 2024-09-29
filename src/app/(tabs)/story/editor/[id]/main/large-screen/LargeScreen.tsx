import Poster from "../_components/poster/Poster";
import Details from "./details/Details";

const LargeScreen = () => {
    return (
        <div className="hidden lg:block">
            <div className="sticky top-0 w-full h-14 flex items-center justify-between px-6 bg-[#282828] rounded-tl-xl">
                <p className="font-sfbold text-2xl tracking-[1px]">Details</p>
            </div>
            <div className="pt-16 flex gap-6">
                <Poster />
                <Details />
            </div>
        </div>
    );
};

export default LargeScreen;
