"use client";
import useFetchHottests from "@/src/queries/story/general/landing/useFetchHottests";
import Container from "./Container";

export default function Hottests() {
    const { data: shortStory } = useFetchHottests("short");
    const { data: series } = useFetchHottests("series");
    const { data: novel } = useFetchHottests("novel");
    return (
        <section className="mt-8 lg:mt-20 px-4 lg:px-[8%]">
            <Container type="Short Story" story={shortStory} />
            <Container type="Story-Series" story={series} />
            <Container type="Novel" story={novel} />
        </section>
    );
}
