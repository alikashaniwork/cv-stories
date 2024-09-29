import Backdrop from "@/src/app/_components/modules/Backdrop";
import Form from "./Form";
import Header from "./Header";

interface Props {
    type: string;
    open: boolean;
    onClose: () => void;
}

const Container = ({ type, open, onClose }: Props) => {
    return (
        <Backdrop open={open} onClose={onClose}>
            <div className="bg-[#222] lg:w-[500px] h-[220px]">
                <Header type={type} onClose={onClose} />
                <Form type={type} onClose={onClose} />
            </div>
        </Backdrop>
    );
};

export default Container;
