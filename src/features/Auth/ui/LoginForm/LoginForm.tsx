import { LoginFormContent } from "../LoginFormContent/LoginFormContent";

export const LoginForm = () => {
  return (
    <div className={"sm:w-[425px] w-full bg-secondary-background rounded-2xl shadow-2xl p-6"}>
      <h2 className={"text-lg leading-none font-semibold mb-4"}> Sign in to your account</h2>
      <LoginFormContent />
    </div>
  );
};
