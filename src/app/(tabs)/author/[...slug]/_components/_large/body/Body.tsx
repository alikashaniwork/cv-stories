import Header from "./header/Header";
import List from "./list/List";

const Body = () => {
    return (
        <div className="bg-[#222] rounded-xl flex-grow">
            <Header />
            <List />
        </div>
    );
};

export default Body;
