import { useContext } from "react";
import { Context } from "../../../_Context";

const Summary = () => {
    const { summary } = useContext(Context);
    return (
        <p className="py-4 leading-8 text-[1.08rem] text-neutral-200 border-b border-neutral-700">
            {summary ||
                "Searchers after horror haunt strange, far places. For them are the catacombs of Ptolemais, and the carven mausolea of the nightmare countries. They climb to the moonlit towers of ruined Rhine castles, and falter down black cobwebbed steps beneath the scattered stones of forgotten cities in Asia."}
        </p>
    );
};

export default Summary;
