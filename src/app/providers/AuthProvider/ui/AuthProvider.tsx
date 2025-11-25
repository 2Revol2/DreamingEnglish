"use client";
import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;

  return <SessionProvider>{children}</SessionProvider>;
};
