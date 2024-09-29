import dynamic from "next/dynamic";
import Published from "./published/Published";
const LatestVisited = dynamic(() => import("./latest-visited/LatestVisited"), {
    ssr: false,
});

export default function Body() {
    return (
        <div className="flex h-full *:h-full *:overflow-y-auto *:no-scrollbar *:p-4 *:px-6">
            <div className="flex-[4]">
                <Published />
            </div>
            <LatestVisited />
        </div>
    );
}
