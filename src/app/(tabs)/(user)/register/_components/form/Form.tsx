"use client";
import useCheckEmail from "@/src/queries/user/account/register/useCheckEmail";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import zod from "zod";
import Passwords from "./passwords/Passwords";
import { useEffect } from "react";

type Register = { email: string };

const schema = zod.object({
    email: zod.string().email("Email address is not correct"),
});

export default function Form() {
    const { register, handleSubmit, formState, getValues, watch } =
        useForm<Register>({
            resolver: zodResolver(schema),
        });

    const watchedEmail = watch("email");

    const { errors } = formState;

    const check = useCheckEmail();

    const { isPending, isSuccess, error, reset } = check;

    const onSubmit = (data: Register) => check.mutate(data.email);

    useEffect(() => {
        if (watchedEmail === "") reset();
    }, [watchedEmail]);

    return (
        <div className="w-full max-w-[400px] flex flex-col items-center pt-6 px-4 mx-auto">
            <form className="w-full h-14">
                <div>
                    <label hidden htmlFor="email">
                        Email Address
                    </label>
                    <div className="relative w-full flex items-center">
                        <input
                            id="email"
                            className="w-full h-14 p-4 bg-neutral-800 border border-neutral-700 focus:border-blue transition-all duration-500"
                            type="text"
                            placeholder="Email Address"
                            {...register("email", { required: true })}
                            disabled={isSuccess}
                        />
                        {isSuccess ? (
                            <button
                                type="button"
                                className="text-sm absolute right-6"
                                onClick={reset}
                            >
                                Change
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit(onSubmit)}
                                className="absolute right-6 gap-2"
                                disabled={isPending}
                            >
                                {isPending ? (
                                    <CircularProgress size={15} />
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        fill="#007fff"
                                        className="bi bi-arrow-right-circle"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                                        />
                                    </svg>
                                )}
                            </button>
                        )}
                    </div>
                    <div>
                        {errors.email?.message && (
                            <p className="ml-1 mt-1 font-sfl text-sm text-red-500 tracking-wide">
                                {errors.email?.message}
                            </p>
                        )}
                        {error?.message && (
                            <p className="ml-1 mt-1 font-sfl text-sm text-red-500 tracking-wide">
                                {error.message}
                            </p>
                        )}
                    </div>
                </div>
            </form>
            <Passwords email={getValues("email")} isSuccess={isSuccess} />
        </div>
    );
}
