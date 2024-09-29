import { FormEvent } from "react";

interface Props {
    fullName: string;
    onChange: (e: FormEvent) => void;
}

const Input = ({ fullName, onChange }: Props) => {
    return (
        <input
            id="name"
            type="text"
            className="w-full p-4 px-5 bg-slate-700 border border-slate-600 text-white rounded-2xl focus:border-blue duration-300"
            placeholder="i.e. Sara Max"
            name="fullName"
            value={fullName}
            onChange={onChange}
            required
        />
    );
};

export default Input;
