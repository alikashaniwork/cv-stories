import ReactQueryProvider from "@/src/queries/ReactQueryProvider";
import type { Metadata } from "next";
import NavigationLarge from "./_components/navigation/large/Large";
import NavigationSmall from "./_components/navigation/small/NavigationSmall";
import "./globals.css";

export const metadata: Metadata = {
    title: "STORIES",
    description: "Writing and Reading Short Stories | Novel | Story-Series",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" dir="ltr">
            <body suppressHydrationWarning={true}>
                <ReactQueryProvider>
                    <NavigationLarge />
                    <main>{children}</main>
                    <NavigationSmall />
                </ReactQueryProvider>
            </body>
        </html>
    );
}
