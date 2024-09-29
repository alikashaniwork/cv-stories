import moment from "moment";
import { useContext } from "react";
import { Context } from "../../../../_Context";

const ReleasedAt = () => {
    const { createdAt } = useContext(Context);
    return (
        <div className="flex items-center gap-1">
            <p className="text-neutral-300 tracking-[1px] font-sfbold">
                {moment(createdAt).format("YYYY")}
            </p>
            <p className="text-neutral-300 tracking-[1px] font-sfl text-sm">
                ( {moment(createdAt).format("MMM DD")} )
            </p>
        </div>
    );
};

export default ReleasedAt;
