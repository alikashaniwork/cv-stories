import { useContext } from "react";
import { NavContext } from "../../../Context";
import { Context } from "../_Context";
import History from "./History";
import Results from "./Results";
import Suggestions from "./Suggestions";

export default function Body() {
    const { searchOpen: open } = useContext(NavContext);
    const { keyword } = useContext(Context);
    return (
        <div
            className={`w-[80%] *:h-full *:overflow-y-auto *:no-scrollbar transition-all duration-500 mt-1 bg-neutral-600/50 backdrop-blur-xl shadow-sm shadow-[#0005] rounded-2xl
            ${open ? "h-[50vh]" : "h-0 overflow-hidden"}
            `}
        >
            {keyword ? (
                <Results />
            ) : (
                <div className="w-full h-full *:h-full *:p-8 *:px-10 flex items-center">
                    <Suggestions />
                    <History />
                </div>
            )}
        </div>
    );
}
