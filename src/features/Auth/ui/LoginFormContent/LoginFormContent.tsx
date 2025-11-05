"use client";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RoutePath } from "@/shared/constants/router";
import { Button } from "@/shared/ui/button";

export const LoginFormContent = () => {
  return (
    <div>
      <p className="text-gray-500">Continue with</p>
      <div className="flex flex-col gap-3">
        <Button
          variant="default"
          className="bg-[#24292e] text-white hover:bg-[#1b1f23]"
          onClick={() => signIn("github", { callbackUrl: RoutePath.watch })}
        >
          <FaGithub size={20} />
          Github
        </Button>
        <Button
          className=" bg-white text-black border border-gray-300 hover:bg-gray-50"
          onClick={() => signIn("google", { callbackUrl: RoutePath.watch })}
        >
          <FcGoogle size={20} />
          Google
        </Button>
      </div>
    </div>
  );
};
