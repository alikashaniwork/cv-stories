"use client";
import useFetchUserStories from "@/src/queries/story/library/useFetchList";

export default function List() {
    const { data: stories } = useFetchUserStories("");
    return (
        <div>
            <ul>
                {stories?.map((story) => (
                    <li key={story._id}>
                        <p>{story.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
