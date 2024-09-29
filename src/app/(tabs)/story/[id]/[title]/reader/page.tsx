import dynamic from "next/dynamic";
import Footer from "./_components/footer/Footer";
import Pages from "./_components/pages/Pages";
import ContextProvider from "./_Context";
const Header = dynamic(() => import("./_components/header/Header"), {
    ssr: false,
    loading: () => <div className="h-12" />,
});

const ReaderPage = () => {
    return (
        <ContextProvider>
            <Header />
            <Pages />
            <Footer />
        </ContextProvider>
    );
};

export default ReaderPage;
