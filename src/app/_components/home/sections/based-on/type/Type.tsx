import { Story } from "@/src/queries/story/Entities";
import Container from "./Container";

async function fetchData(type: string): Promise<Story[]> {
    const response = await fetch(
        `https://cv-stories.netlify.app/api/story/general/landing/based-on/${type}`
    );

    if (!response.ok)
        throw new Error(`HTTP error! status: ${response.statusText}`);

    return response.json();
}

export default async function Type() {
    const short = await fetchData("short");
    const series = await fetchData("short");
    const novel = await fetchData("short");
    return (
        <section>
            <Container type="short" stories={short} />
            <Container type="series" stories={series} />
            <Container type="novel" stories={novel} />
        </section>
    );
}
