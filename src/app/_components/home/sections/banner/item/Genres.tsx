const Genres = ({ genres }: { genres: string[] }) => {
    return (
        <div className="flex items-center gap-2 mt-1">
            {genres?.map((genre) => (
                <p
                    key={genre}
                    className="pl-[2px] uppercase text-sm tracking-[1px] text-neutral-400"
                >
                    {genre}
                </p>
            ))}
        </div>
    );
};

export default Genres;
