"use client";
import LargeScreenContainer from "../../../_components/LargeScreenContainer";
import Bio from "../bio/Bio";
import Email from "../email/Email";
import FullName from "../full-name/FullName";
import Password from "../password/Password";
import Photo from "../photo/Photo";
import Username from "../username/Username";

export default function Large() {
    return (
        <LargeScreenContainer>
            <>
                <p className="text-2xl font-sfb tracking-wide">Profile</p>
            </>
            <div className="flex justify-center gap-[8%] p-6">
                <Photo />
                <div className="flex-grow max-w-96 flex flex-col gap-4">
                    <FullName />
                    <Bio />
                    <Username />
                    <Email />
                    <Password />
                </div>
            </div>
        </LargeScreenContainer>
    );
}
