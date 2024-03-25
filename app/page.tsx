import Logo from "@/app/ui/components/Logo/jupter-logo";
import SignInForm from "@/app/ui/components/SignInForm/signin-form";


export default function Page() {
    return (
        <div className={`bg-cover bg-[url("../public/login-page-bg.png")] bg-center h-screen relative`}>
            <div className="items-center flex h-full justify-center relative">
                <div className="bg-gradient-to-r from-[#282828] from-8.42% via-[#202020] via-48.96% to-[#202020] to-99% border border-solid border-[#ffffff1d] rounded-[20px] pb-8 pt-12 px-12">
                    <div className="items-center flex flex-col justify-center max-w-[300px] w-full">
                        <p className="text-lg mb-11">
                            Join our ecossystem, the path to venture capital's next chapter begins here.
                        </p>
                        <SignInForm 
                            emailLabel="Login"
                            passwordLabel="Password"
                        />
                    </div>
                </div>
                <Logo />
            </div>
        </div>
    );
}