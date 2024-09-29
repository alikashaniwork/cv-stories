"use client";
import useSignOut from "@/src/queries/user/account/useSignOut";

export default function SignOut() {
    const signout = useSignOut();
    return (
        <button
            className="w-1/2 h-9 rounded-xl text-neutral-300 uppercase text-[.8rem] tracking-[.8px] bg-neutral-800"
            onClick={() => signout.mutate()}
        >
            Sign Out
        </button>
    );
}
