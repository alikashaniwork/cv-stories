import useFetchUserStories from "@/src/queries/story/library/useFetchList";
import { useSearchParams } from "next/navigation";
import Item from "./item/Item";
import Loading from "./Loading";

const Published = () => {
    const status = useSearchParams().get("status") || "published";
    const type = useSearchParams().get("type") || "short";
    const { data: stories, isPending } = useFetchUserStories(status);
    if (status !== "published") return null;
    return isPending ? (
        <Loading />
    ) : stories?.length === 0 ? (
        <p className="absolute left-1/2 -translate-x-1/2 mt-12 text-lg tracking-wide text-neutral-300 flex items-center justify-center text-[.9rem]">
            No Published Stories!
        </p>
    ) : (
        stories?.map(
            (story) =>
                story.type.toLowerCase().includes(type) && (
                    <Item key={story._id} story={story} />
                )
        )
    );
};

export default Published;
