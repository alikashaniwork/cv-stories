import AddedList from "./_part/AddedList";
import Options from "./_part/Options";
import Part from "./_part/Part";

const languages = ["English", "French", "Persian", "Arabic", "Hendi", "Hebrew"];

const Languages = () => {
    return (
        <Part title="Languages">
            <AddedList title="languages" />
            <Options title="languages" options={languages} />
        </Part>
    );
};

export default Languages;
