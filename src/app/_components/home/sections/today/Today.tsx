import { Story } from "@/src/queries/story/Entities";
import Container from "./Container";

export default async function Today() {
    const response = await fetch(
        "https://cv-stories.netlify.app/api/story/general/landing/today"
    );

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const stories: Story[] = await response.json();

    return (
        <section className="mt-12 lg:mt-16">
            <Container stories={stories} />
        </section>
    );
}
