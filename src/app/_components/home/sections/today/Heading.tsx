const Heading = ({ type }: { type: string }) => {
    return (
        <p className="py-4 uppercase font-sfblack lg:text-2xl tracking-[2px] text-rose-600">
            {type}
        </p>
    );
};

export default Heading;
