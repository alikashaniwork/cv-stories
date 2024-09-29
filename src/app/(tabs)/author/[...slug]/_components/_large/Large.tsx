import Body from "./body/Body";
import Sidebar from "./sidebar/Sidebar";

const Large = () => {
    return (
        <div className="hidden md:flex gap-2 p-2 h-[calc(100vh-48px)] *:h-full *:overflow-y-auto *:no-scrollbar">
            <Sidebar />
            <Body />
        </div>
    );
};

export default Large;
