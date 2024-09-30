"use client";
import useFetchListNumbers from "@/src/queries/story/library/useFetchListNumbers";
import Link from "next/link";

export default function Published() {
    const { data, isPending } = useFetchListNumbers();
    if (isPending) return null;
    const published = data?.published;
    return (
        <div>
            <p className="font-sfb text-neutral-300 text-xl tracking-wide px-1">
                Published Stories
            </p>
            <ul className="grid grid-cols-4 gap-2 mt-2">
                <li className="col-span-2">
                    <Link
                        href="library?status=published&type=short"
                        className="h-24 flex-col items-start bg-neutral-800 shadow-sm shadow-neutral-900 backdrop-blur-xl rounded-2xl gap-1"
                    >
                        <p className="px-6 text-green-600 font-sfb text-lg tracking-wide">
                            Short
                        </p>
                        <p className="text-center self-center font-sfb text-3xl tracking-wide text-white">
                            {published?.shorts}
                        </p>
                    </Link>
                </li>
                <li className="col-span-2">
                    <Link
                        href="library?status=published&type=series"
                        className="h-24 flex-col items-start bg-neutral-800 shadow-sm shadow-neutral-900 backdrop-blur-xl rounded-2xl gap-1"
                    >
                        <p className="px-6 text-rose-600 -mt-2 font-sfb text-lg tracking-wide">
                            Series
                        </p>
                        <p className="text-center self-center font-sfb text-3xl tracking-wide text-white">
                            {published?.serieses}
                        </p>
                    </Link>
                </li>
                <li className="col-span-4">
                    <Link
                        href="library?status=published&type=novel"
                        className="h-24 flex-col items-start bg-neutral-800 shadow-sm shadow-neutral-900 backdrop-blur-xl rounded-2xl gap-1"
                    >
                        <p className="px-6 text-purple-500 -mt-2 font-sfb text-lg tracking-wide">
                            Novel
                        </p>
                        <p className="text-center self-center font-sfb text-3xl tracking-wide text-white">
                            {published?.novels}
                        </p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
