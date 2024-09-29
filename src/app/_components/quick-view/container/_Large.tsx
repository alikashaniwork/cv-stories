import Actions from "./Actions";
import Author from "./Author";
import Characters from "./Characters";
import Details from "./Details";
import Header from "./Header";
import Locations from "./Locations";
import Poster from "./Poster";
import RatingContainer from "./Rating";
import Summary from "./Summary";

export default function Large({ onClose }: { onClose: () => void }) {
    return (
        <div className="hidden lg:block h-full">
            <Header onClose={onClose} />
            <div className="h-[calc(100%-96px)] flex gap-6 *:p-6 *:py-4 *:h-full *:overflow-y-auto *:no-scrollbar">
                <div className="*:mb-4 min-w-72">
                    <Poster />
                    <RatingContainer />
                    <Author />
                    <Actions />
                </div>
                <div className="*:border-b *:border-neutral-700 *:py-4">
                    <Details />
                    <Summary />
                    <Characters />
                    <Locations />
                </div>
            </div>
        </div>
    );
}
