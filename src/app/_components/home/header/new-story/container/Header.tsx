import CloseButton from "@/src/app/_components/modules/CloseButton";

interface Props {
    type: string;
    onClose: () => void;
}

const Header = ({ type, onClose }: Props) => {
    return (
        <div className="h-[60px] flex items-center justify-between px-5">
            <p className="capitalize font-sfb tracking-[1px] text-xl text-neutral-200">
                Create {type} Story
            </p>
            <CloseButton onClose={onClose} />
        </div>
    );
};

export default Header;
