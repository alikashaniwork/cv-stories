import Poster from "../_components/poster/Poster";
import Footer from "./footer/Footer";
import Header from "./Header";
import Navigation from "./navigation/Navigation";
import Tagline from "./tagline/Tagline";
import Title from "./title/Title";

const SmallScreen = () => {
    return (
        <div className="lg:hidden pt-12">
            <Header />
            <Poster />
            <Title />
            <Tagline />
            <Navigation />
            <Footer />
        </div>
    );
};

export default SmallScreen;
