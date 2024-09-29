import Link from "next/link";

export const genres = [
    {
        label: "Drama",
        bgColor: "bg-green-600",
    },
    {
        label: "Horror",
        bgColor: "bg-rose-600",
    },
    {
        label: "Comedy",
        bgColor: "bg-blue",
    },
    {
        label: "Sci-Fi",
        bgColor: "bg-orange-600",
    },
    {
        label: "Fantasy",
        bgColor: "bg-purple-600",
    },
    {
        label: "Fiction",
        bgColor: "bg-pink-600",
    },
];

export default function Genres() {
    return (
        <div>
            <p className="px-4 font-sfb text-lg tracking-wide">Genres</p>
            <ul className="grid grid-cols-2 gap-2 pt-2 p-4">
                {genres.map((genre, index) => (
                    <li key={index}>
                        <Link
                            href={`explore?type=short&genres=${genre.label}`}
                            className={`w-full h-12 rounded-2xl ${genre.bgColor}`}
                        >
                            <p className="text-white font-sfb tracking-wide capitalize">
                                {genre.label}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
