"use client";
import useLatestVisitedStore from "../../../../../store";
import AuthorItem from "./Author";
import StoryItem from "./Story";

export default function LatestVisited() {
    const list = useLatestVisitedStore((s) => s.list);
    const clearAll = useLatestVisitedStore((s) => s.setRemoveAll);
    return (
        list.length !== 0 && (
            <div className="w-[400px] border-l border-neutral-800">
                <div className="px-2 mb-2 flex items-center justify-between">
                    <p className="font-sfb text-lg tracking-wide">
                        Latest Visited
                    </p>
                    <button
                        onClick={clearAll}
                        className="text-[.95rem] font-sfl"
                    >
                        Clear All
                    </button>
                </div>
                <ul className="grid grid-cols-2 items-center gap-2">
                    {list?.map((item) =>
                        item.fullName ? (
                            <AuthorItem key={item._id} item={item} />
                        ) : (
                            <StoryItem key={item._id} item={item} />
                        )
                    )}
                </ul>
            </div>
        )
    );
}
