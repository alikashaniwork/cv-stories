import Genres from "./Genres";
import ReleasedAt from "./ReleasedAt";
import Title from "./Title";

const Top = () => {
    return (
        <div className="w-full h-[74px] sticky top-0 left-0 z-10 flex items-center justify-between bg-[#222222] backdrop-blur-xl border-b border-[#333] px-6">
            <div className="flex-col !items-start">
                <Title />
                <ReleasedAt />
            </div>
            <Genres />
        </div>
    );
};

export default Top;
