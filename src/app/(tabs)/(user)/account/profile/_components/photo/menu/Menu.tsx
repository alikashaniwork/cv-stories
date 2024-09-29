"use client";
import Cancel from "./Cancel";
import Delete from "./Delete";
import Save from "./Save";
import Upload from "./Upload";

export default function Menu() {
    return (
        <div className="w-full h-[52px] flex items-center justify-between px-4 border-t border-neutral-700">
            <Upload />
            <Cancel />
            <Save />
            <Delete />
        </div>
    );
}
