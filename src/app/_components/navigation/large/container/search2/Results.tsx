import useSearch from "@/src/queries/search/useSearch";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "./Context";

const Results = () => {
    const { keyword, query } = useContext(Context);
    const { data, isPending } = useSearch(query);
    if (!data) return null;
    const { stories, authors } = data;
    const result = [...(stories || []), ...(authors || [])];
    return (
        <div className="p-1 overflow-y-auto h-[calc(100%-100px)] px-4 no-scrollbar w-[400px] mx-auto">
            {isPending ? (
                <div className="flex items-center justify-center mt-10">
                    <CircularProgress size={15} sx={{ color: "#888" }} />
                </div>
            ) : (
                <>
                    {keyword && (
                        <div className="pt-2 flex items-center gap-2">
                            <p className="text-lg tracking-[1px] text-neutral-200 mb-2">
                                Results
                            </p>
                            <p className="text-[1.2rem] font-shabmb mb-2">
                                {result.length > 0
                                    ? result.length
                                    : "Not found!"}
                            </p>
                        </div>
                    )}
                    <ul className="text-left">
                        {stories?.map((story) => (
                            <li key={story._id}>
                                <Link
                                    className="justify-start py-2 border-b border-neutral-700"
                                    href={`/story/${story._id}/${story.title}?query=${keyword}`}
                                >
                                    <div className="flex items-center justify-start gap-2 ">
                                        <Image
                                            width={45}
                                            height={45}
                                            src={story.poster}
                                            alt={story.title || ""}
                                            className="min-w-[45px] max-w-[45px] h-[65px] rounded-lg object-cover"
                                        />
                                        <p className="text-10 font-sfl text-neutral-300 text-[.9rem] tracking-wide">
                                            {story.title}
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="text-left pb-10">
                        {authors?.map((author) => (
                            <li key={author._id}>
                                <Link
                                    className="justify-start py-1 border-b border-[#333]"
                                    href={`/author/${author.fullName}/${author._id}?query=${keyword}`}
                                >
                                    <div className="flex items-center justify-start gap-2 ">
                                        <Image
                                            width={45}
                                            height={45}
                                            src={author.photo}
                                            alt={author.fullName || ""}
                                            className="min-w-[45px] max-w-[45px] h-[45px] rounded-full object-cover"
                                        />
                                        <p className="text-10 font-sfl text-[.9rem] tracking-wide">
                                            {author.fullName}
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default Results;
