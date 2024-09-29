import { getSession } from "@/authentication";
import Container from "./container/Container";
import ContextProvider from "./Context";

export default async function NavigationLarge() {
    const session = await getSession();
    return (
        <ContextProvider>
            <Container session={session} />
        </ContextProvider>
    );
}
