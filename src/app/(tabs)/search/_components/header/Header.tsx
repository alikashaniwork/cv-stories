import dynamic from "next/dynamic";
const History = dynamic(() => import("./History"), {
    ssr: false,
});

const Header = () => {
    return (
        <header className="sticky top-0 z-10 h-12 px-4 backdrop-blur-xl flex items-center justify-between">
            <p className="text-2xl tracking-wide font-sfb">Search</p>
            <History />
        </header>
    );
};

export default Header;
