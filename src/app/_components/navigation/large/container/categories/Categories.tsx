import Novel from "./novel/Novel";
import Series from "./series/Series";
import Short from "./short/Short";

const Categories = () => {
    return (
        <div className="flex items-center *:px-6">
            <Short />
            <Series />
            <Novel />
        </div>
    );
};

export default Categories;
