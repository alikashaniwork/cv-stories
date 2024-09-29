"use client";
import Bio from "../bio/Bio";
import Email from "../email/Email";
import FullName from "../full-name/FullName";
import Password from "../password/Password";
import Photo from "../photo/Photo";
import Username from "../username/Username";
import Delete from "./Delete";
import Header from "./Header";

export default function Small() {
    return (
        <div className="lg:hidden">
            <Header />
            <div className="flex flex-col pt-12  *:rounded-none *:border-b *:border-neutral-700">
                <Photo />
                <FullName />
                <Bio />
                <Username />
                <Email />
                <Password />
            </div>
            <Delete />
        </div>
    );
}
