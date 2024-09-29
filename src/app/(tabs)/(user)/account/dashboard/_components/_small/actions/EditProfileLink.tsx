import Link from "next/link";

export default function EditProfileLink() {
    return (
        <Link
            href="profile"
            className="w-1/2 h-9 rounded-xl text-neutral-300 uppercase text-[.8rem] tracking-[.8px] bg-neutral-800"
        >
            Edit Profile
        </Link>
    );
}
