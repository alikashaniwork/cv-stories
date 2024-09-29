import { Story } from "@/src/queries/story/Entities";
import Container from "./Container";

export default async function WhatToRead() {
    const response = await fetch(
        "https://cv-stories.netlify.app/api/story/general/landing/what-to-read"
    );

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const stories: Story[] = await response.json();

    return (
        <section className="mt-8 lg:mt-20">
            <Container stories={stories} />
        </section>
    );
}
