"use client";
import Container from "./Container";

export default function Genre() {
    return (
        <section className="">
            <Container genre="Drama" />
            <Container genre="Horror" />
            <Container genre="Romance" />
        </section>
    );
}
