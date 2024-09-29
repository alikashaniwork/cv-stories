import { useContext } from "react";
import { Context } from "./Container";

export default function Summary() {
    const { story } = useContext(Context);
    return <p className="">{story?.summary}</p>;
}
