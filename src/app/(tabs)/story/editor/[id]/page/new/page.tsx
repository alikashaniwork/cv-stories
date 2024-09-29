import Header from "./_components/Header";
import Info from "./_components/info/Info";
import Input from "./_components/Input";
import ContextProvider from "./_Context";

const NewPage = () => {
    return (
        <ContextProvider>
            <Header />
            <Info />
            <Input />
        </ContextProvider>
    );
};

export default NewPage;
