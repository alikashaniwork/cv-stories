import Image from "next/image";
import { useContext } from "react";
import Backdrop from "../../Backdrop";
import { NavContext } from "../../Context";
import Container from "./Container";

export default function Search() {
    const { onOpenSearch, searchOpen, setSearchOpen } = useContext(NavContext);
    return (
        <>
            <button onClick={onOpenSearch}>
                <Image
                    width={16.5}
                    height={16.5}
                    src="/icons/nav/search.png"
                    alt=""
                />
            </button>
            <Backdrop open={searchOpen} onClose={() => setSearchOpen(false)}>
                <Container />
            </Backdrop>
        </>
    );
}
