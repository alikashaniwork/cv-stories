import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Types = () => {
    const pathname = usePathname();
    const router = useRouter();
    const type = useSearchParams().get("type") || "story";
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());
    const handleType = (value: string) => {
        params.delete("type");
        params.append("type", value);
        router.push(`${pathname}?${params.toString()}`);
    };
    return (
        <div className="w-full md:w-[350px]">
            <ul className="relative w-full h-10 flex items-center justify-between gap-1 bg-neutral-800 lg:bg-[unset] rounded-xl md:rounded-2xl p-2 px-1 text-center *:w-1/2">
                <li>
                    <button
                        onClick={() => handleType("story")}
                        className="justify-center w-full"
                    >
                        <p className="relative z-20 font-sfl text-[.95rem] tracking-wide text-neutral-200">
                            Story
                        </p>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleType("author")}
                        className="justify-center w-full"
                    >
                        <p className="relative z-20 font-sfl text-[.95rem] tracking-wide text-neutral-200">
                            Author
                        </p>
                    </button>
                </li>

                <span
                    className={`!w-[calc(100%/2-4px)] h-[calc(100%-8px)] block absolute top-1/2 z-10 -translate-y-1/2 bg-[#444] rounded-[10px] md:rounded-xl ${
                        type === "story"
                            ? "translate-x-[0%]"
                            : type === "author"
                            ? "translate-x-[calc(100%)]"
                            : "translate-x-[0]"
                    } transition-all duration-300`}
                ></span>
            </ul>
        </div>
    );
};

export default Types;
