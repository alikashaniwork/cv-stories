const Heading = ({ type }: { type: string }) => {
    return (
        <p className="py-4 uppercase font-sfblack tracking-[2px] text-rose-600">
            Trending {type}
        </p>
    );
};

export default Heading;
