import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { Context } from "./Context";

const Form = () => {
    const { keyword, setKeyword } = useContext(Context);
    const { replace } = useRouter();
    const pathname = usePathname();
    return (
        <form className="relative w-[400px] mx-auto flex items-center mt-4">
            <label hidden htmlFor="keyword">
                Title, Author, Genre, ...
            </label>

            <input
                className="py-[14px] px-6 pr-12 w-full bg-[unset] placeholder:text-[1rem] placeholder:text-[#666666] backdrop-blur-lg border-none"
                id="keyword"
                type="text"
                name="keyword"
                placeholder="Search Stories ..."
                value={keyword}
                onChange={(e) => {
                    if (e.target.value === "") {
                        replace(`${pathname}`);
                    }
                    setKeyword(e.target.value);
                }}
            />
            {keyword && (
                <button
                    className="absolute right-4 bg-[#444] p-[2px] rounded-full"
                    onClick={() => {
                        setKeyword("");
                        replace(`${pathname}`);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#aaa"
                        className="bi bi-x"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </button>
            )}
        </form>
    );
};

export default Form;
