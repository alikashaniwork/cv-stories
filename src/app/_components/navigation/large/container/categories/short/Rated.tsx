import Link from "next/link";

const Rated = () => {
    return (
        <div>
            <p className="text-[1rem] tracking-[1.5px] text-neutral-300 font-sfl">
                Rated
            </p>
            <ul className="pt-2 flex flex-col gap-2">
                <li>
                    <Link
                        className="justify-start font-sfblack text-white text-xl uppercase tracking-[1px]"
                        href="/story/explore?type=short&rated=G"
                    >
                        G
                    </Link>
                </li>
                <li>
                    <Link
                        className="justify-start font-sfblack text-white text-xl uppercase tracking-[1px]"
                        href="/story/explore?type=short&rated=PG"
                    >
                        PG
                    </Link>
                </li>
                <li>
                    <Link
                        className="justify-start font-sfblack text-white text-xl uppercase tracking-[1px]"
                        href="/story/explore?type=short&rated=PG-13"
                    >
                        PG-13
                    </Link>
                </li>
                <li>
                    <Link
                        className="justify-start font-sfblack text-white text-xl uppercase tracking-[1px]"
                        href="/story/explore?type=short&rated=R"
                    >
                        R
                    </Link>
                </li>
                <li>
                    <Link
                        className="justify-start font-sfblack text-white text-xl uppercase tracking-[1px]"
                        href="/story/explore?type=short&rated=NC-17"
                    >
                        NC-17
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Rated;
