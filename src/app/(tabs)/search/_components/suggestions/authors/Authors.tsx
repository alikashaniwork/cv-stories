import useSearchSuggestions from "@/src/queries/search/useSearchSuggestions";
import { useSearchParams } from "next/navigation";
import Item from "./Item";

export default function Authors() {
    const type = useSearchParams().get("type");
    const { data } = useSearchSuggestions();
    return (
        type === "authors" && (
            <ul>
                {data?.authors?.map((author) => (
                    <Item key={author._id} author={author} />
                ))}
            </ul>
        )
    );
}
