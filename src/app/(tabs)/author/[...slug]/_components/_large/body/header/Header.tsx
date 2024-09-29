import Sort from "./sort/Sort";
import Types from "./Types";

const Header = () => {
    return (
        <div className="h-16 sticky top-0 z-10 flex items-center justify-between bg-[#222] border-b border-[#333] px-6 *:flex *:items-center *:flex-1">
            <p className="font-sfbold text-xl tracking-[1px]">
                Author&apos;s Stories
            </p>
            <Types />
            <Sort />
        </div>
    );
};

export default Header;
