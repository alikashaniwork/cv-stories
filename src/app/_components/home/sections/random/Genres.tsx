const Genres = ({ genres }: { genres: string[] }) => {
    return (
        <ul className="flex items-center justify-end gap-2 mt-1">
            {genres?.map((genre) => (
                <li
                    key={genre}
                    className="uppercase text-sm tracking-[1px] text-neutral-300"
                >
                    {genre}
                </li>
            ))}
        </ul>
    );
};

export default Genres;
