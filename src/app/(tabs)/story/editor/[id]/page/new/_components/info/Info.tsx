import PageNumber from "./PageNumber";
import WordsNumber from "./WordsNumber";

const Info = () => {
    return (
        <div className="h-10 flex items-center justify-between px-4">
            <PageNumber />
            <WordsNumber />
        </div>
    );
};

export default Info;
