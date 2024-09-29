interface Props {
    isVisible: boolean;
    confirmPassword: string;
    setConfirmPassword: (value: string) => void;
}

export default function ConfirmPasswordInput({
    isVisible,
    confirmPassword,
    setConfirmPassword,
}: Props) {
    return (
        <input
            id="confirmPassword"
            className="w-full h-14 p-6 border-t border-neutral-700 rounded-none"
            type={isVisible ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
    );
}
