import Link from "next/link";

export default function Header() {
    return (
        <div className="sticky top-0 z-10 h-12 flex items-center justify-between py-3 p-4 lg:px-[8%] backdrop-blur-xl border-b border-neutral-800">
            <p className="min-w-28 text-xl tracking-wide font-sfb">Register</p>
            <Link href="signin" className="font-sfl tracking-wide text-sm">
                Already have an account? Sign In
            </Link>
        </div>
    );
}
