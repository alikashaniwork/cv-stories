import Link from "next/link";
import Published from "./published/Published";

export default function LibraryMenu() {
    return (
        <div className="mt-8 px-4">
            <Published />
            <Link
                className="h-12 justify-between text-neutral-300 tracking-wide bg-neutral-800 rounded-2xl mt-4 px-4"
                href="library?status=draft"
            >
                Drafts
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#888"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                    />
                </svg>
            </Link>
            <Link
                className="h-12 justify-between text-neutral-300 tracking-wide bg-neutral-800 rounded-2xl mt-2 px-4"
                href="library?status=saved"
            >
                Saved Stories
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#888"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                    />
                </svg>
            </Link>
        </div>
    );
}
