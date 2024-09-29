import List from "../list/List";
import Types from "../Types";
import Header from "./header/Header";

export default function Small() {
    return (
        <div className="lg:hidden">
            <Header />
            <Types />
            <List />
        </div>
    );
}
