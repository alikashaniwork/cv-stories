import Body from "./body/Body";
import Header from "./Header";

const SmallScreen = () => {
    return (
        <div className="lg:hidden">
            <Header />
            <Body />
        </div>
    );
};

export default SmallScreen;
