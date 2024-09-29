import { getSession } from "@/authentication";
import Container from "./Container";

export default async function NavigationSmall() {
    const session = await getSession();
    return <Container session={session} />;
}
