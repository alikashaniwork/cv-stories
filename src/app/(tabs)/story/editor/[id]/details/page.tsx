import Genres from "./_components/genres/Genres";
import Header from "./_components/Header";
import Langauge from "./_components/Langauge";
import Rated from "./_components/Rated";
import Summary from "./_components/summary/Summary";

const DetailsPage = () => {
    return (
        <div className="lg:hidden">
            <Header />
            <div className="p-4 pt-12">
                <Genres />
                <Langauge />
                <Rated />
                <Summary />
            </div>
        </div>
    );
};

export default DetailsPage;
