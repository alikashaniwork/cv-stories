import { Story } from "@/src/queries/story/Entities";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Save from "./Save";
const MenuContainer = dynamic(() => import("./menu/Menu"), { ssr: false });

const Item = ({ story }: { story: Story }) => {
    const status = useSearchParams().get("status") || "published";
    const pathname = window.location.pathname;
    const search = window.location.search;
    const fullPath = `${pathname}${search}`;
    return (
        <li
            key={story._id}
            className="flex items-center justify-between bg-neutral-800 md:bg-[#2a2a2a] rounded-2xl pr-4"
        >
            <Link
                href={
                    status === "published"
                        ? `/story/${story._id}/${story.title}/preview?lastPath=${fullPath}`
                        : ""
                }
                className="flex-grow flex items-center justify-start gap-2"
            >
                <Image
                    width={500}
                    height={500}
                    src={story.poster}
                    alt="Poster"
                    className="w-[100px] h-[120px] object-cover rounded-bl-xl rounded-tl-xl bg-[#444] flex items-center justify-center text-neutral-400 font-sft text-[.8rem] uppercase tracking-[1px]"
                />
                <p className="font-sfr text-[#dadada] text-lg">{story.title}</p>
            </Link>
            {status === "saved" ? (
                <Save id={story._id} />
            ) : (
                <MenuContainer storyId={story._id} />
            )}
        </li>
    );
};

export default Item;
