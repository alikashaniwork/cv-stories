import Delete from "./Delete";
import Menu from "./menu/Menu";
import Top from "./top/Top";

const Sidebar = () => {
    return (
        <aside className="hidden lg:block relative min-w-[250px] lg:min-w-[300px] h-[calc(100vh-64px)] rounded-2xl overflow-y-auto no-scrollbar bg-second-theme">
            <Top />
            <Menu />
            <Delete />
        </aside>
    );
};

export default Sidebar;
