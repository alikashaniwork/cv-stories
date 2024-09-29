import Backdrop from "@/src/app/_components/modules/Backdrop";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "../../../../EditorProvider";
import Characters from "./Characters";
import Footer from "./footer/Footer";
import Locations from "./Locations";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function Container({ isOpen, onClose }: Props) {
    const {
        poster,
        title,
        tagline,
        genres,
        rated,
        language,
        summary,
        characters,
        locations,
        pages,
    } = useContext(Context);
    return (
        <Backdrop open={isOpen} onClose={onClose}>
            <div className="w-full max-h-[calc(100vh-90px)] overflow-y-auto no-scrollbar">
                <div className="w-full pb-20 p-6">
                    <div className="flex items-center gap-4">
                        <Image
                            width={1000}
                            height={1400}
                            src={poster}
                            alt=""
                            className="w-20 h-28 object-cover rounded-xl shadow-sm shadow-black/80"
                        />
                        <div>
                            <p className="text-neutral-400 font-sfl tracking-wider">
                                Title
                            </p>
                            <p className="font-sfb text-left text-xl">
                                {title}
                            </p>
                        </div>
                    </div>
                    <div className="w-full py-2 border-b border-neutral-700">
                        <p className="text-neutral-400 font-sfl tracking-wider">
                            Tagline
                        </p>
                        <p className="text-left text-xl">
                            {tagline || (
                                <span className="text-sm font-sfl text-neutral-200 block">
                                    No Tagline
                                </span>
                            )}
                        </p>
                    </div>
                    <div className="w-full py-2 border-b border-neutral-700">
                        <p className="text-neutral-400 font-sfl tracking-wider">
                            Summary
                        </p>
                        <p className="text-left text-xl">
                            {summary || (
                                <span className="text-sm font-sfl text-neutral-200 block">
                                    No Summary
                                </span>
                            )}
                        </p>
                    </div>
                    <div className="w-full py-2 border-b border-neutral-700">
                        <p className="text-neutral-400 font-sfl tracking-wider">
                            Genres
                        </p>
                        <ul>
                            {genres.length === 0 ? (
                                <p>No Genre</p>
                            ) : (
                                genres?.map((genre) => (
                                    <li key={genre} className="py-[2px]">
                                        <p className="tracking-wider text-left text-lg">
                                            {genre}
                                        </p>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                    <div className="w-full py-2 border-b border-neutral-700">
                        <p className="text-neutral-400 font-sfl tracking-wider">
                            Rated (Interest Age)
                        </p>
                        <p className="text-left text-xl mt-[2px]">
                            {rated || (
                                <span className="text-sm font-sfl text-neutral-200 block">
                                    No Rated
                                </span>
                            )}
                        </p>
                    </div>
                    <div className="w-full py-2 border-b border-neutral-700">
                        <p className="text-neutral-400 font-sfl tracking-wider">
                            Language
                        </p>
                        <p className="text-left text-xl mt-[2px]">
                            {language || (
                                <span className="text-sm font-sfl text-neutral-200 block">
                                    No Language
                                </span>
                            )}
                        </p>
                    </div>
                    <div className="w-full py-2 border-b border-neutral-700">
                        <p className="text-neutral-400 font-sfl tracking-wider">
                            Pages
                        </p>
                        <p className="text-left text-xl mt-[2px]">
                            {pages.length > 0 ? (
                                pages.length
                            ) : (
                                <span className="text-sm font-sfl text-neutral-200 block">
                                    No Pages
                                </span>
                            )}
                        </p>
                    </div>
                    <Characters />
                    <Locations />
                </div>
                <Footer onClose={onClose} />
            </div>
        </Backdrop>
    );
}
