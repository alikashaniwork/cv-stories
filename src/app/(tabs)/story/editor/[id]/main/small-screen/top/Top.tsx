import Poster from "./poster/Poster";
import Title from "./title/Title";

const Top = () => {
    return (
        <div className="flex items-center gap-4 bg-neutral-900 border-b border-neutral-800 pt-16 pb-8 px-4">
            <Poster />
            <Title />
        </div>
    );
};

export default Top;
