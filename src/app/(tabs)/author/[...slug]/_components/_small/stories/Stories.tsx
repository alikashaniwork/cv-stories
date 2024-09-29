import Types from "../../_large/body/header/Types";
import List from "../../_large/body/list/List";

const Stories = () => {
    return (
        <div className="pb-20 ">
            <p className="p-4 pb-2 font-sfbold text-lg tracking-[1px]">
                Author&apos;s Stories
            </p>
            <div className="flex items-center justify-center px-4">
                <Types />
            </div>
            <List />
        </div>
    );
};

export default Stories;
