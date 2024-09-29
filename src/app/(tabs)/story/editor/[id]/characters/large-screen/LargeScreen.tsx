import List from "./list/List";
import MenuContainer from "./menu/Menu";
import New from "./new/New";

const LargeScreen = () => {
    return (
        <div className="hidden lg:block">
            <div className="sticky top-0 z-10 w-full h-14 flex items-center justify-between px-6 bg-[#282828] rounded-tl-xl">
                <p className="font-sfbold text-2xl tracking-[1px]">
                    Characters
                </p>
                <div className="flex items-center gap-4">
                    <New />
                    <MenuContainer />
                </div>
            </div>
            <List />
        </div>
    );
};

export default LargeScreen;
