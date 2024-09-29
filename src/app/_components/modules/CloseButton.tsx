import Image from "next/image";

const CloseButton = ({
    onClose,
    onCancel = () => {},
}: {
    onClose: () => void;
    onCancel?: () => void;
}) => {
    return (
        <button
            type="button"
            onClick={() => {
                onClose();
                onCancel();
            }}
            className="bg-[#484848] h-[36px] w-[36px] rounded-full"
        >
            <Image width={15} height={15} src="/icons/close/gray.png" alt="" />
        </button>
    );
};

export default CloseButton;
