import Backdrop from "../modules/Backdrop";
import Container from "./container/Container";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    storyID: string;
}

export default function QuickView({ isOpen, onClose, storyID }: Props) {
    return (
        <Backdrop open={isOpen} onClose={onClose}>
            <Container onClose={onClose} storyID={storyID} />
        </Backdrop>
    );
}
