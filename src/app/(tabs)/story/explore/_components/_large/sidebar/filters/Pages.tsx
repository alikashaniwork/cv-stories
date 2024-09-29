import AddedList from "./_part/AddedList";
import Options from "./_part/Options";
import Part from "./_part/Part";

const options = ["5", "10", "15", "20", "30", "50", "100", "200"];

const Pages = () => {
    return (
        <Part title="Pages">
            <AddedList title="pages" />
            <Options title="pages" options={options} />
        </Part>
    );
};

export default Pages;
