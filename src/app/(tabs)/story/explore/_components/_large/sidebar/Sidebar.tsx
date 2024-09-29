import dynamic from "next/dynamic";
const Filters = dynamic(() => import("./filters/Filters"), { ssr: false });

const Sidebar = ({ isCollpased }: { isCollpased: boolean }) => {
    return (
        <div
            className={`sticky top-14 right-0 h-[calc(100vh-64px)] overflow-x-hidden ${
                isCollpased
                    ? "min-w-0 max-w-0 *:invisible"
                    : "min-w-[280px] max-w-[280px] *:visible"
            } transition-all duration-500 rounded-xl bg-[#282828] *:pr-2`}
        >
            <Filters />
        </div>
    );
};

export default Sidebar;
