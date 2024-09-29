import Link from "next/link";

const types = ["short", "series", "novel"];

export default function Types() {
    return (
        <div className="flex flex-col items-center gap-2 pt-2 p-4">
            {types.map((type, index) => (
                <Link
                    key={index}
                    href={`explore?type=${type}`}
                    className="w-full h-14 bg-neutral-800 shadow-sm shadow-black rounded-2xl"
                >
                    <p className="text-neutral-100 uppercase font-sfb tracking-wider">
                        {type}
                    </p>
                </Link>
            ))}
        </div>
    );
}
