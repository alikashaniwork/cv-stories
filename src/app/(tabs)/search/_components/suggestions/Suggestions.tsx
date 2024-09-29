"use client";
import { useContext } from "react";
import { Context } from "../../_Context";
import Authors from "./authors/Authors";
import Header from "./Header";
import Stories from "./stories/Stories";

export default function Suggestions() {
    const { keyword } = useContext(Context);
    return (
        !keyword && (
            <div className="px-4">
                <Header />
                <Stories />
                <Authors />
            </div>
        )
    );
}
