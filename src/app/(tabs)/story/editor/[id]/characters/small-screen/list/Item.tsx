import MenuContainer from "./Menu";

const Item = ({
    character,
}: {
    character: {
        _id?: string;
        name: string;
        about?: string | null | undefined;
    };
}) => {
    return (
        <li className="flex items-center justify-between gap-4 px-1 py-3 border-b border-neutral-800">
            <div>
                <p className="text-[1.05rem]">{character.name}</p>
                <p className="text-sm font-sfl text-neutral-400">
                    {character.about}
                </p>
            </div>
            <MenuContainer characterId={character._id!} />
        </li>
    );
};

export default Item;
