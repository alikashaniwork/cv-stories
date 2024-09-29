import useRegister from "@/src/queries/user/account/register/useRegister";
import { FormEvent, useEffect, useRef, useState } from "react";
import zod from "zod";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import SubmitButton from "./SubmitButton";
import Tips from "./Tips";
import VisibilityButton from "./VisibilityButton";
import PasswordInput from "./PasswordInput";

const schema = zod
    .object({
        password: zod
            .string()
            .min(8, "8 or more characters")
            .regex(/[A-Z]/, "upper & lowercase letters")
            .regex(/[0-9]/, "at least one number"),

        confirmPassword: zod.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export type Register = {
    password?: string;
    confirmPassword?: string;
};

interface Props {
    isSuccess: boolean;
    email: string;
}

export default function Passwords({ email, isSuccess }: Props) {
    const [isVisible, setIsVisible] = useState(false);

    const [showTips, setShowTips] = useState(false);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createAccount = useRegister();
    const { isPending } = createAccount;

    const [requirements, setRequirements] = useState({
        minLength: false,
        hasUpperLower: false,
        hasNumber: false,
    });

    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const handleFocus = () => setShowTips(true);
        const handleBlur = () => setShowTips(false);

        const currentRef = ref.current;
        if (currentRef) {
            currentRef.addEventListener("focus", handleFocus);
            currentRef.addEventListener("blur", handleBlur);
        }
        return () => {
            if (currentRef) {
                currentRef.removeEventListener("focus", handleFocus);
                currentRef.removeEventListener("blur", handleBlur);
            }
        };
    }, []);

    useEffect(() => {
        setRequirements({
            minLength: password.length >= 8,
            hasUpperLower: /[A-Z]/.test(password) && /[a-z]/.test(password),
            hasNumber: /[0-9]/.test(password),
        });
    }, [password]);

    const validatePasswords = (e: FormEvent) => {
        e.preventDefault();
        try {
            schema.parse({ password, confirmPassword });
            createAccount.mutate({
                email,
                password,
            });
        } catch (error) {
            setShowTips(true);
        }
    };

    return (
        <form
            onSubmit={(e) => validatePasswords(e)}
            className={`relative w-full transition-all duration-500 overflow-hidden
            ${
                true
                    ? "h-auto pb-20 opacity-1 visible"
                    : "h-0 opacity-0 invisible"
            }    
            `}
        >
            <div
                className={`mt-2 bg-neutral-800 border border-neutral-700 rounded-2xl transition-all duration-500 overflow-hidden
                ${isSuccess ? "h-28 opacity-1" : "h-0 opacity-0"} 
                `}
            >
                <div className="relative w-full flex items-center">
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
                    <VisibilityButton
                        isVisible={isVisible}
                        onVisible={() => setIsVisible(!isVisible)}
                    />
                </div>

                <ConfirmPasswordInput
                    isVisible={isVisible}
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
                />

                <Tips showTips={showTips} requirements={requirements} />
            </div>

            <SubmitButton isSuccess={isSuccess} isPending={isPending} />
        </form>
    );
}
