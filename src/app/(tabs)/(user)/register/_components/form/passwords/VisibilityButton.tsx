import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface Props {
    isVisible: boolean;
    onVisible: () => void;
}

export default function VisibilityButton({ isVisible, onVisible }: Props) {
    return (
        <button type="button" className="absolute right-6" onClick={onVisible}>
            {isVisible ? (
                <VisibilityOff sx={{ color: "#888", fontSize: "1.3rem" }} />
            ) : (
                <Visibility sx={{ color: "#888", fontSize: "1.3rem" }} />
            )}
        </button>
    );
}
