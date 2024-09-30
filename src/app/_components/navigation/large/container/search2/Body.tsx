import dynamic from "next/dynamic";
import { useContext } from "react";
import { Context } from "./Context";
import Results from "./Results";
// const History = dynamic(() => import("./History"), { ssr: false });

const Body = () => {
    const { keyword } = useContext(Context);
    // return keyword ? <Results /> : <History />;
    return <Results />;
};

export default Body;
