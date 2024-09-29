import { MutableRefObject } from "react";

interface Props {
    ref: MutableRefObject<HTMLInputElement | null>;
    isVisible: boolean;
    password: string;
    setPassword: (value: string) => void;
}

export default function PasswordInput({
    ref,
    isVisible,
    password,
    setPassword,
}: Props) {
    return (
        <input
            ref={(el) => {
                ref.current = el;
            }}
            id="password"
            className="w-full h-14 p-6 rounded-none"
            type={isVisible ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
    );
}
