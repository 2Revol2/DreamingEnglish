"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/shared/ui/button";
import { RoutePath } from "@/shared/constants/router";

const Login = () => {
  return (
    <div>
      Login
      <Button onClick={() => signIn("github", { callbackUrl: RoutePath.watch })}>Login with github</Button>
    </div>
  );
};
export default Login;
