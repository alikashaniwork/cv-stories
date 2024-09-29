import Header from "./Header";
import List from "./list/List";

const SmallScreen = () => {
    return (
        <div className="lg:hidden">
            <Header />
            <List />
        </div>
    );
};

export default SmallScreen;
