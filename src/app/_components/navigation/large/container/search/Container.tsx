import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";
import { NavContext } from "../../Context";
import ContextProvider from "./Context";
import Form from "./Form";
const Body = dynamic(() => import("./Body"), { ssr: false });

const Container = () => {
    const { searchOpen: open, setSearchOpen } = useContext(NavContext);
    const styles = `absolute top-0 z-20 *:bg-[#333] *:rounded-xl *:border *:border-[#444] *:mx-auto *:mt-4 w-full pt-12 transition-all duration-500 px-[8%] overflow-hidden ${
        open ? "visible opacity-1 h-[60vh]" : "opacity-0 invisible h-[0]"
    }`;
    useEffect(() => {
        const handleCloseOnScroll = () => setSearchOpen(false);
        window.addEventListener("scroll", handleCloseOnScroll);
        return () => window.removeEventListener("scroll", handleCloseOnScroll);
    }, []);

    return (
        <ContextProvider>
            <div className={styles}>
                <Form />
                <Body />
            </div>
        </ContextProvider>
    );
};

export default Container;
