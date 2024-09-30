import useSearchSuggestions from "@/src/queries/search/useSearchSuggestions";
import convertURLName from "@/src/utils/convertURLName";
import Image from "next/image";
import Link from "next/link";

export default function Suggestions() {
    const { data } = useSearchSuggestions();
    return (
        <div className="flex-[3]">
            <p className="font-sfr text-neutral-300 tracking-wide">
                Suggestions
            </p>
            <ul className="pt-2">
                {data?.stories?.map((story, index) => (
                    <li key={index} className="py-1 ltr text-left">
                        <Link
                            href={`/story/${story?._id}/${convertURLName(
                                story?.title
                            )}/preview`}
                            className="gap-3 justify-start bg-second-theme rounded-xl"
                        >
                            <Image
                                width={500}
                                height={500}
                                src={story.poster}
                                alt=""
                                className="object-cover w-12 h-16 rounded-tl-xl rounded-bl-xl"
                            />
                            <p className="font-sfl text-neutral-300 text-[.8rem] tracking-wider">
                                {story.title}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
