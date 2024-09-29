"use client";
import useFetchListNumbers from "@/src/queries/story/library/useFetchListNumbers";

export default function Published() {
    const { data, isPending } = useFetchListNumbers();
    if (isPending) return null;
    const published = data?.published;
    return (
        <div>
            <p className="font-sfb text-xl tracking-wide px-1">My Stories</p>
            <ul className="grid grid-cols-4 gap-2 mt-2">
                <li className="h-20 col-span-2 flex flex-col justify-center rounded-2xl bg-neutral-800">
                    <p className="px-4 font-sfb text-lg tracking-wide text-green-500">
                        Short
                    </p>
                    <p className="text-center font-sfb text-2xl tracking-wide">
                        {published?.shorts}
                    </p>
                </li>
                <li className="h-20 col-span-2 flex flex-col justify-center rounded-2xl bg-neutral-800">
                    <p className="px-4 font-sfb text-lg tracking-wide text-rose-500">
                        Series
                    </p>
                    <p className="text-center font-sfb text-2xl tracking-wide">
                        {published?.serieses}
                    </p>
                </li>
                <li className="h-20 col-span-4 flex flex-col justify-center rounded-2xl bg-neutral-800">
                    <p className="px-4 font-sfb text-lg tracking-wide text-blue">
                        Novel
                    </p>
                    <p className="text-center font-sfb text-2xl tracking-wide">
                        {published?.novels}
                    </p>
                </li>
            </ul>
        </div>
    );
}
