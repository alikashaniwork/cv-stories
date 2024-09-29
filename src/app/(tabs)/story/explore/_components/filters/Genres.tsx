import { genres } from "@/data/genres";
import AddedList from "./_part/AddedList";
import Options from "./_part/Options";
import Part from "./_part/Part";

const Genres = () => {
    return (
        <Part title="Genres">
            <AddedList title="genres" />
            <Options title="genres" options={genres} />
        </Part>
    );
};

export default Genres;
