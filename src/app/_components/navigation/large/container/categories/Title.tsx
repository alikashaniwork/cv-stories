import Link from "next/link";

const Title = ({ title, href }: { title: string; href: string }) => {
    return (
        <Link
            className="text-neutral-300 text-[.85rem] uppercase  font-sfl  tracking-[1.5px]"
            href={`/story/explore?type=${href}`}
        >
            {title}
        </Link>
    );
};

export default Title;
