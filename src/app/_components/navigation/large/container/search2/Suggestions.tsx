import useSearchSuggestions from "@/src/queries/search/useSearchSuggestions";
import Link from "next/link";

const Suggestions = () => {
    const { data } = useSearchSuggestions();
    return (
        <div className="flex gap-[15%] w-1/3">
            <div>
                <p className="text-sm text-10">Suggested Stories</p>
                <ul>
                    {data?.stories?.map((story, index) => (
                        <li key={index} className="py-1 text-left">
                            <Link
                                className="py-1 gap-3 justify-start"
                                href={`/story/${story?.title}/${story?._id}/preview`}
                            >
                                <p className="font-sfl text-[.8rem] text-10 tracking-[1px]">
                                    {story?.title}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <p className="text-sm text-10">Suggested Authors</p>
                <ul>
                    {data?.authors?.map((author, index) => (
                        <li key={index} className="py-1 text-left">
                            <Link
                                className="py-1 gap-3 justify-start"
                                href={`/author/${author?.fullName}/${author?._id}`}
                            >
                                <p className="font-sfl text-[.8rem] text-10 tracking-[1px]">
                                    {author?.fullName}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Suggestions;
