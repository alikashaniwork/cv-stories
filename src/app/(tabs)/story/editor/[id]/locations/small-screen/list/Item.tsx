import MenuContainer from "./Menu";

const Item = ({
    location,
}: {
    location: {
        _id?: string;
        name: string;
        state?: string | null | undefined;
    };
}) => {
    return (
        <li className="flex items-center justify-between gap-4 px-1 py-3 border-b border-neutral-800">
            <div>
                <p className="text-[1.05rem]">{location.name}</p>
                <p className="text-sm font-sfl text-neutral-400">
                    {location.state}
                </p>
            </div>
            <MenuContainer locationId={location._id!} />
        </li>
    );
};

export default Item;
