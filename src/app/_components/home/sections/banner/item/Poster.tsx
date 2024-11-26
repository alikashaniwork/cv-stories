import Image from "next/image";

const Poster = ({ poster }: { poster: string }) => {
    return (
        <Image
            src={poster}
            alt="Poster Image"
            width={1000}
            height={1400}
            sizes="(max-width: 1024px) 100vw, 320px"
            className="w-full h-full object-cover rounded-2xl"
            priority
        />
    );
};

export default Poster;
