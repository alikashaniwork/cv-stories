import { Story } from "@/src/queries/story/Entities";
import Container from "./Container";

export default async function Banner() {
    const response = await fetch(
        "https://cv-stories.netlify.app/api/story/general/landing/banner"
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const stories: Story[] = await response.json();
    return (
        <section>
            <Container stories={stories} />
        </section>
    );
}

export const revalidate = 60;
