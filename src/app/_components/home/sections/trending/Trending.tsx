import { Story } from "@/src/queries/story/Entities";
import List from "./List";

export default async function Trending() {
    const response = await fetch(
        "https://cv-stories.netlify.app/api/story/general/landing/trending"
        // "http://localhost:3000/api/story/general/landing/trending"
    );

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const stories: Story[] = await response.json();

    return (
        <section className="mt-10 lg:mt-20">
            <List stories={stories} />
        </section>
    );
}
