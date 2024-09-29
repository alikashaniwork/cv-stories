"use client";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import Image from "next/image";
import EditProfileLink from "./EditProfileLink";
import ItemLink from "./ItemLink";
import Loading from "./Loading";
import SignOut from "./SignOut";

export default function Menu() {
    const { isPending } = useFetchUserDetails();
    return (
        <div className="h-[calc(100%-144px)] overflow-y-auto no-scrollbar p-4 pt-0">
            {isPending ? (
                <Loading />
            ) : (
                <>
                    <div className="mt-2 flex items-center gap-2 *:flex-1">
                        <EditProfileLink />
                        <SignOut />
                    </div>

                    <div className="mt-6">
                        <ItemLink href="dashboard" title="dashboard">
                            <Image
                                width={17}
                                height={17}
                                src="/icons/dashboard.png"
                                alt=""
                            />
                        </ItemLink>
                        <ItemLink href="library?status=saved" title="saved">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                className="bi bi-bookmarks-fill ml-[2px]"
                                viewBox="0 0 16 16"
                            >
                                <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5z" />
                                <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1z" />
                            </svg>
                        </ItemLink>
                    </div>

                    <p className="ml-1 mt-6 text-xl font-sfb tracking-wide">
                        My Stories
                    </p>
                    <ItemLink href="library?status=published" title="published">
                        <Image
                            width={22}
                            height={22}
                            src="/icons/story/publish.png"
                            alt=""
                        />
                    </ItemLink>
                    <ItemLink href="library?status=draft" title="draft">
                        <Image
                            width={22}
                            height={22}
                            src="/icons/story/draft.png"
                            alt=""
                        />
                    </ItemLink>
                </>
            )}
        </div>
    );
}
