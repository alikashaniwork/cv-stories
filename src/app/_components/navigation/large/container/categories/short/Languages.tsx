import Link from "next/link";

const Languages = () => {
    return (
        <div className="">
            <p className="text-[1rem] tracking-[1.5px] text-neutral-300 font-sfl">
                Languages
            </p>
            <ul className="pt-2 flex flex-col gap-2">
                <li>
                    <Link
                        className="justify-start font-sfblack text-white text-xl uppercase tracking-[1px]"
                        href="/story/explore?type=short&language=english"
                    >
                        English
                    </Link>
                </li>
                <li>
                    <Link
                        className="justify-start font-sfblack text-white text-xl uppercase tracking-[1px]"
                        href="/story/explore?type=short&language=french"
                    >
                        French
                    </Link>
                </li>
                <li>
                    <Link
                        className="justify-start font-sfblack text-white text-xl uppercase tracking-[1px]"
                        href="/story/explore?type=short&language=persian"
                    >
                        Persian
                    </Link>
                </li>
                <li>
                    <Link
                        className="justify-start font-sfblack text-white text-xl uppercase tracking-[1px]"
                        href="/story/explore?type=short&language=arabic"
                    >
                        Arabic
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Languages;
