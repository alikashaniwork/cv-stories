import Image from "next/image";

const Poster = ({ poster }: { poster: string }) => {
    return (
        <Image
            width={1000}
            height={1400}
            src={poster}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
            priority
        />
    );
};

export default Poster;
