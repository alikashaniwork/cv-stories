import PageNumber from "./PageNumber";
import WordsNumber from "./WordsNumber";

const Info = () => {
    return (
        <div className="sticky top-0 h-[45px] flex items-center justify-between px-4 bg-[#222222]">
            <PageNumber />
            <WordsNumber />
        </div>
    );
};

export default Info;
