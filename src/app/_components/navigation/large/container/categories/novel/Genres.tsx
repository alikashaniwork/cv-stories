import Link from "next/link";

const Genres = () => {
    return (
        <div className="">
            <p className="text-[1rem] tracking-[1.5px] text-neutral-300 font-sfl">
                Genres
            </p>
            <ul className="pt-2 flex flex-col gap-2">
                <li>
                    <Link
                        className="justify-start font-sfblack text-white text-xl uppercase tracking-[1px]"
                        href="/story/explore?type=novel&genre=drama"
                    >
                        Drama
                    </Link>
                </li>
                <li>
                    <Link
                        className="justify-start font-sfblack text-white text-xl uppercase tracking-[1px]"
                        href="/story/explore?type=novel&genre=drama"
                    >
                        Horror
                    </Link>
                </li>
                <li>
                    <Link
                        className="justify-start font-sfblack text-white text-xl uppercase tracking-[1px]"
                        href="/story/explore?type=novel&genre=drama"
                    >
                        Fiction
                    </Link>
                </li>
                <li>
                    <Link
                        className="justify-start font-sfblack text-white text-xl uppercase tracking-[1px]"
                        href="/story/explore?type=novel&genre=drama"
                    >
                        Romance
                    </Link>
                </li>
                <li>
                    <Link
                        className="justify-start font-sfblack text-white text-xl uppercase tracking-[1px]"
                        href="/story/explore?type=novel&genre=drama"
                    >
                        Sci-Fi
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Genres;
