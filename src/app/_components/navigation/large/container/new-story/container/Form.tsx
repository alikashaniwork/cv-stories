import { useEffect, useState } from "react";
import Submit from "./Submit";
import useCreateStory from "@/src/queries/story/editor/useCreate";

const Form = ({ type, onClose }: { type: string; onClose: () => void }) => {
    const [data, setData] = useState("");
    const create = useCreateStory();
    const { isPending, isSuccess, error } = create;
    useEffect(() => {
        isSuccess && onClose();
    }, [isSuccess]);
    return (
        <form
            className="h-[160px] text-left flex flex-col gap-2 pb-16 items-center justify-center"
            onSubmit={(e) => {
                e.preventDefault();
                create.mutate({ title: data, type });
            }}
        >
            <p className="h-6 flex items-center justify-center">
                {isSuccess ? "Success" : error && error.message}
            </p>
            <div className="w-[80%] h-[60px] flex items-center justify-between overflow-hidden border border-[#444] rounded-2xl">
                <label
                    className="bg-[#3a3a3a] min-w-20 h-full flex items-center justify-center font-sfr uppercase tracking-wider"
                    htmlFor="title"
                >
                    Title
                </label>
                <input
                    className="bg-[unset] pl-6 text-2xl border-none h-full w-full"
                    id="title"
                    type="text"
                    placeholder="e.g. Harry Potter"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
                <Submit data={data} isLoading={isPending} />
            </div>
        </form>
    );
};

export default Form;
