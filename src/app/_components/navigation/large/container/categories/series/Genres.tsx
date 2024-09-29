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
                        href="/story/explore?type=series&genre=drama"
                    >
                        Drama
                    </Link>
                </li>
                <li>
                    <Link
                        className="justify-start font-sfblack text-white text-xl uppercase tracking-[1px]"
                        href="/story/explore?type=series&genre=horror"
                    >
                        Horror
                    </Link>
                </li>
                <li>
                    <Link
                        className="justify-start font-sfblack text-white text-xl uppercase tracking-[1px]"
                        href="/story/explore?type=series&genre=fiction"
                    >
                        Fiction
                    </Link>
                </li>
                <li>
                    <Link
                        className="justify-start font-sfblack text-white text-xl uppercase tracking-[1px]"
                        href="/story/explore?type=series&genre=romance"
                    >
                        Romance
                    </Link>
                </li>
                <li>
                    <Link
                        className="justify-start font-sfblack text-white text-xl uppercase tracking-[1px]"
                        href="/story/explore?type=series&genre=drama"
                    >
                        Sci-Fi
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Genres;
