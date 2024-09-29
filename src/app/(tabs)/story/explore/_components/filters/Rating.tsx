import AddedList from "./_part/AddedList";
import Options from "./_part/Options";
import Part from "./_part/Part";

const options = ["1", "2", "3", "4", "5"];

const Rating = () => {
    return (
        <Part title="Rating">
            <AddedList title="rating" />
            <Options title="rating" options={options} />
        </Part>
    );
};

export default Rating;
