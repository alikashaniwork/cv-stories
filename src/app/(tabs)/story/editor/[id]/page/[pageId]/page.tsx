import Header from "./_components/Header";
import Info from "./_components/info/Info";
import Input from "./_components/Input";
import ContextProvider from "./_Context";

const EditPage = () => {
    return (
        <ContextProvider>
            <Header />
            <div className="h-[calc(100vh-56px)] bg-[#252525] overflow-hidden rounded-2xl m-1">
                <Info />
                <Input />
            </div>
        </ContextProvider>
    );
};

export default EditPage;
