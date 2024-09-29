import { getSession } from "@/authentication";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";
import EditorProvider from "./EditorProvider";
import Large from "./_layouts/large-screen/Large";
import Small from "./_layouts/small-screen/Small";

export default async function EditorLayout({ children }: PropsWithChildren) {
    const session = await getSession();
    if (!session) redirect("/");
    return (
        <EditorProvider>
            <Large>{children}</Large>
            <Small>{children}</Small>
        </EditorProvider>
    );
}
