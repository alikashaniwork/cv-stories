import LargeScreenContainer from "../../../_components/LargeScreenContainer";
import List from "../list/List";
import Header from "./header/Header";

export default function Large() {
    return (
        <LargeScreenContainer>
            <Header />
            <List />
        </LargeScreenContainer>
    );
}
