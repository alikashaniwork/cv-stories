import { useContext } from "react";
import { Context } from "../../_Context";

const Summary = () => {
    const { summary } = useContext(Context);
    return (
        <p className="text-neutral-200 !py-3 !p-4 leading-7 font-sfl">
            {summary}
        </p>
    );
};

export default Summary;
