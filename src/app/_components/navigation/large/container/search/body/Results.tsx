import useSearch from "@/src/queries/search/useSearch";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "../_Context";

const Results = () => {
    const { keyword, query } = useContext(Context);
    const { data, isPending } = useSearch(query);

    return (
        <div className="p-1 px-4 no-scrollbar w-[400px] mx-auto">
            {isPending ? (
                <div className="flex items-center justify-center mt-10">
                    <CircularProgress size={15} sx={{ color: "#888" }} />
                </div>
            ) : (
                <>
                    {keyword && (
                        <div className="pt-2 flex items-center gap-2">
                            {data?.stories.length !== 0 ? (
                                <p className="text-lg tracking-[1px] text-neutral-200 mb-2">
                                    Results <span>{data?.stories.length}</span>
                                </p>
                            ) : (
                                <p className="text-[1.1rem] mx-auto text-neutral-300 font-sfl mb-2">
                                    No result found!
                                </p>
                            )}
                        </div>
                    )}
                    <ul className="text-left">
                        {data?.stories?.map((story) => (
                            <li key={story._id}>
                                <Link
                                    className="ltr  justify-start py-2 border-b border-neutral-700"
                                    href={`/story/${story._id}/${story.title}?query=${keyword}`}
                                >
                                    <div className="flex items-center justify-start gap-2 ">
                                        <Image
                                            width={45}
                                            height={45}
                                            src={story.poster}
                                            alt={story.title || ""}
                                            className="min-w-16 max-w-16 h-20 object-cover rounded-xl"
                                        />
                                        <p className="text-10 font-sfl text-neutral-300 text-[.9rem] tracking-wide">
                                            {story.title}
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
