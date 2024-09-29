"use client";
import useLatestVisitedStore from "../../../../store";
import List from "./list/List";

export default function LatestVisited() {
    const list = useLatestVisitedStore((s) => s.list);
    if (list.length === 0) return null;
    return (
        <div className="mt-8">
            <p className="px-4 text-xl font-sfb">Latest Visited</p>
            <List />
        </div>
    );
}
