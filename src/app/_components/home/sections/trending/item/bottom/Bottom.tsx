import Link from "next/link";
import Author from "./Author";
import { useContext } from "react";
import { Context } from "../Item";

export default function Bottom() {
    const { _id, title } = useContext(Context);
    return (
        <div className="px-1 lg:p-0 !max-w-60">
            <Author />
            <Link
                href={`story/${_id}/${title}/reader`}
                className="w-20 mt-4 bg-blue text-white p-1 rounded-full"
            >
                Read
            </Link>
        </div>
    );
}
