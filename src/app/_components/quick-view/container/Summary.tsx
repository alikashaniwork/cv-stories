import { useContext } from "react";
import { Context } from "./Container";

export default function Summary() {
    const { summary } = useContext(Context);
    return <p className="text-neutral-300 font-sfl">{summary}</p>;
}
