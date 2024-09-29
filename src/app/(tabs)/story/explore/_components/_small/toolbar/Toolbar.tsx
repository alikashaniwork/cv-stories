import dynamic from "next/dynamic";
const Sort = dynamic(() => import("./Sort"), {
    ssr: false,
});
const Filters = dynamic(() => import("./filters/Filters"), {
    ssr: false,
});

const Toolbar = () => {
    return (
        <div className="md:hidden sticky top-0 z-10 flex justify-between items-center h-10 px-4 bg-[#10101088] backdrop-blur-2xl border-b border-[#1115] *:flex *:items-center">
            <Sort />
            <Filters />
        </div>
    );
};

export default Toolbar;
