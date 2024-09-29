import { useContext } from "react";
import Backdrop from "../../Backdrop";
import { NavContext } from "../../Context";
import Container from "./Container";

export default function Search() {
    const { onOpenSearch, searchOpen, setSearchOpen } = useContext(NavContext);
    return (
        <>
            <button onClick={onOpenSearch} className="-ml-6 w-10 h-10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="#aaa"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </button>
            <Backdrop open={searchOpen} onClose={() => setSearchOpen(false)}>
                <Container />
            </Backdrop>
        </>
    );
}
