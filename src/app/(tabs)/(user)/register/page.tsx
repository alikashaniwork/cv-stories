import Form from "./_components/form/Form";
import Greeting from "./_components/Greeting";
import Header from "./_components/Header";

export default function RegisterPage() {
    return (
        <div className="pb-20">
            <Header />
            <Greeting />
            <Form />
        </div>
    );
}
