"use client";
import Author from "./Author";
import Characters from "./Characters";
import Details from "./Details";
import Footer from "./footer/Footer";
import Header from "./Header";
import Info from "./Info";
import Locations from "./Locations";
import Summary from "./Summary";
import Top from "./top/Top";

const Small = () => {
    return (
        <div className="md:hidden">
            <Header />
            <Top />
            <Details />
            <div className="w-full flex flex-col gap-4 p-4 pb-20 *:bg-neutral-800 *:p-2 *:rounded-2xl">
                <Author />
                <Summary />
                <Characters />
                <Locations />
                <Info />
            </div>
            <Footer />
        </div>
    );
};

export default Small;
