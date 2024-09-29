import useSearchSuggestions from "@/src/queries/search/useSearchSuggestions";
import { useSearchParams } from "next/navigation";
import Item from "./Item";

export default function Stories() {
    const type = useSearchParams().get("type") || "stories";
    const { data } = useSearchSuggestions();
    return (
        type === "stories" && (
            <ul>
                {data?.stories?.map((story) => (
                    <Item key={story._id} story={story} />
                ))}
            </ul>
        )
    );
}
