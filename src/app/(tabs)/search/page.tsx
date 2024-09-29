import dynamic from "next/dynamic";
import Form from "./_components/Form";
import Header from "./_components/header/Header";
import Results from "./_components/Results";
import Suggestions from "./_components/suggestions/Suggestions";
const ContextProvider = dynamic(() => import("./_Context"), { ssr: false });

const SearchPage = () => {
    return (
        <ContextProvider>
            <Header />
            <div className="pb-28">
                <Results />
                <Suggestions />
            </div>
            <Form />
        </ContextProvider>
    );
};

export default SearchPage;
