import { useContext } from "react";
import { Context } from "./Item";

const Summary = () => {
    const { summary } = useContext(Context);
    const limitedSummary = (value: string): string => {
        return value.length > 80 ? `${value.slice(0, 80)} ...` : value;
    };
    return (
        <p className="font-sft text-neutral-300">{limitedSummary(summary)}</p>
    );
};

export default Summary;
