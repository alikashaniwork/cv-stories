import { useContext } from "react";
import Footer from "./footer/Footer";
import Genres from "./Genres";
import { Context } from "./Container";
import Poster from "./Poster";
import Details from "./Details";
import Summary from "./Summary";
import Characters from "./Characters";
import Locations from "./Locations";

export default function Small({ onClose }: { onClose: () => void }) {
    const { title } = useContext(Context);
    return (
        <div className="lg:hidden h-full">
            <div className="h-full flex flex-col gap-4 items-center px-4 pb-20 overflow-y-auto no-scrollbar">
                <div className="flex flex-col items-center p-4">
                    <p className="text-2xl font-sfb">{title}</p>
                    <Genres />
                </div>
                <Poster />
                <Details />
                <Summary />
                <Characters />
                <Locations />
            </div>
            <Footer onClose={onClose} />
        </div>
    );
}
