"use client";

import { authenticate } from "@/app/lib/actions";

import { 
    useFormState, 
    useFormStatus 
} from "react-dom";
import {
    ExclamationCircleIcon
} from '@heroicons/react/24/outline';


export default function SignInForm({ 
    emailLabel, 
    passwordLabel 
}: { 
    emailLabel: string, 
    passwordLabel: string 
}){
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);


    return (
        <form action={dispatch} className="flex flex-col items-center justify-center">
            <div className="w-full">
                <label className="block mb-[25px] w-full" htmlFor="email">
                    {emailLabel}
                    <input 
                        className="bg-[#232323] border border-solid border-[#424242] mt-[10px] outline-none px-[18px] py-[20px] shadow-gradient-signin rounded-2xl w-full"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        required
                        type="email"
                    />
                </label>
            </div>
            <div className="w-full">
                <label className="block mb-[25px] w-full" htmlFor="password">
                    {passwordLabel}
                    <input 
                        className="bg-[#232323] border border-solid border-[#424242] mt-[10px] outline-none px-[18px] py-[20px] shadow-gradient-signin rounded-2xl w-full"
                        id="password"
                        minLength={6}
                        name="password"
                        placeholder="Your Jupter pass"
                        required
                        type="password"
                    />
                </label>
            </div>
            <LoginButton />
            <div className="flex h-[2rem] items-center ml-[0.25rem]">
                {errorMessage && (
                    <>
                        <ExclamationCircleIcon className="text-sm text-[#de6d34]"/>
                        <p className="text-xs text-[#de6d34]">
                            {errorMessage}
                        </p>
                    </>
                )}
            </div>
        </form>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();


    return (
        <div aria-disabled={pending} className="w-fit">
            <button className="bg-[#ffffff1a] border border-solid border-[#ffffff1a] cursor-pointer px-[40px] py-[12px] rounded-[25px] shadow-[0px_4px_25px_0px_#00000017] text-[18px]" type="submit">
                Join
            </button>
        </div>
    );
}
