import Name from "../../Name";
import Numbers from "../../Numbers";
import Photo from "../../Photo";
import Username from "../../Username";

const Sidebar = () => {
    return (
        <div className="bg-[#222] rounded-xl min-w-[350px] max-w-[350px] flex flex-col items-center pt-2 gap-6">
            <Photo />
            <div className="w-full flex flex-col items-center px-6">
                <Name />
                <Username />
                <Numbers />
            </div>
        </div>
    );
};

export default Sidebar;
