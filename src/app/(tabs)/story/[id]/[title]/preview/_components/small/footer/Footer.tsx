import Link from "next/link";
import Save from "./Save";

const Footer = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full h-14 *:h-full flex items-center justify-between gap-2  py-1 px-2 pr-4">
            <Link
                className="flex-grow bg-neutral-100 rounded-2xl text-neutral-700 uppercase tracking-[1px]"
                href="reader"
            >
                Reading
            </Link>
            <Save />
        </div>
    );
};

export default Footer;
