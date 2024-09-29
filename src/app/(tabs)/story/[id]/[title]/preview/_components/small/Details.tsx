import { useContext } from "react";
import { Context } from "../../_Context";

const Details = () => {
    const { language, rated, pages } = useContext(Context);
    const Container = ({
        title,
        value,
    }: {
        title: string;
        value: string | number;
    }) => (
        <div className="w-1/4 h-10 flex items-center justify-center gap-2 bg-neutral-800 rounded-xl px-4 flex-1">
            <p className="tracking-[1px] text-neutral-300 text-[.95rem] font-sfl">
                {value}
                {title === "pages" && (
                    <span className="pl-1 font-sft uppercase text-[.8rem] tracking-[1.5px] text-neutral-400">
                        Pages
                    </span>
                )}
            </p>
        </div>
    );
    return (
        <div className="mt-4 px-4 flex items-center justify-center gap-2">
            <Container title="language" value={language} />
            <Container title="" value={rated} />
            <Container title="pages" value={pages.length || 0} />
            <Container title="" value={2024} />
        </div>
    );
};

export default Details;
