import { Story } from "@/src/queries/story/Entities";
import Container from "./Container";

export default async function Random() {
    const response = await fetch(
        "https://cv-stories.netlify.app/api/story/general/landing/random"
    );

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const stories: Story[] = await response.json();

    return (
        <section className="mt-10 lg:mt-20">
            <Container stories={stories} />
        </section>
    );
}
