"use client";
import useSignin from "@/src/queries/user/account/useSignin";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { CircularProgress } from "@mui/material";
import { useState } from "react";

export default function Form() {
    const [isVisible, setIsVisible] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signin = useSignin();

    const { isPending, error } = signin;

    return (
        <form
            className="max-w-[350px] px-4 flex flex-col items-center pt-8 pb-20 mx-auto *:w-full"
            onSubmit={(e) => {
                e.preventDefault();
                signin.mutate({ email, password });
            }}
        >
            <div>
                <label
                    className="block ml-[6px] mb-[2px] text-neutral-300"
                    htmlFor="email"
                >
                    Email Address
                </label>
                <input
                    id="email"
                    className="w-full h-14 p-4 bg-neutral-800 border border-neutral-700 focus:border-blue transition-all duration-500"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mt-3">
                <label
                    className="block ml-[6px] mb-[2px] text-neutral-300"
                    htmlFor="password"
                >
                    Password
                </label>
                <div className="relative w-full flex items-center">
                    <input
                        id="password"
                        className="w-full h-14 p-4 bg-neutral-800 border border-neutral-700 focus:border-blue transition-all duration-500"
                        type={isVisible ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        className="absolute right-6"
                        onClick={() => setIsVisible(!isVisible)}
                    >
                        {isVisible ? (
                            <VisibilityOff
                                sx={{ color: "#888", fontSize: "1.3rem" }}
                            />
                        ) : (
                            <Visibility
                                sx={{ color: "#888", fontSize: "1.3rem" }}
                            />
                        )}
                    </button>
                </div>
            </div>
            <div className="mt-[6px] flex items-center justify-between pl-1">
                {error?.message && (
                    <p className="text-sm font-sft text-rose-500 tracking-[1px]">
                        {error.message}
                    </p>
                )}
            </div>
            <button
                className="h-12 gap-2 mt-4 bg-blue text-white rounded-2xl disabled:bg-neutral-700"
                disabled={isPending || !email || !password}
            >
                {isPending && <CircularProgress size={14} />}
                Sign In
            </button>
        </form>
    );
}
