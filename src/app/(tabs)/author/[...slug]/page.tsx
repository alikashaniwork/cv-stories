import Large from "./_components/_large/Large";
import Small from "./_components/_small/Small";
import ContextProvider from "./_Context";

const AuthorPage = () => {
    return (
        <ContextProvider>
            <Small />
            <Large />
        </ContextProvider>
    );
};

export default AuthorPage;
