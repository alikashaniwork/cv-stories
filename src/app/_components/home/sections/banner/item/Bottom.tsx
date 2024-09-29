import { Story } from "@/src/queries/story/Entities";
import convertURLName from "@/src/utils/convertURLName";
import Link from "next/link";
import Author from "./Author";

export default function Bottom({ story }: { story: Story }) {
    return (
        <div className="flex items-center justify-between">
            <Author user={story.user} />
            <Link
                href={`story/${story._id}/${convertURLName(
                    story.title
                )}/reader`}
                className="bg-blue mt-1 text-white p-[2px] tracking-wide px-3 text-sm font-sfl rounded-full"
            >
                Read
            </Link>
        </div>
    );
}
