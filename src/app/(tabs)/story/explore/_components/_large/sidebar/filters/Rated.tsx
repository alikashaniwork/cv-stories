import AddedList from "./_part/AddedList";
import Options from "./_part/Options";
import Part from "./_part/Part";

const options = ["G", "PG", "PG-13", "R", "NC-17"];

const Rated = () => {
    return (
        <Part title="Rated">
            <AddedList title="rated" />
            <Options title="rated" options={options} />
        </Part>
    );
};

export default Rated;
