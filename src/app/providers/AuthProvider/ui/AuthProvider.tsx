"use client";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { getUserData, useUserDataStore, updateUserData } from "@/entities/User";
import type { ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;
  const setUserData = useUserDataStore((s) => s.setUserData);
  const userData = useUserDataStore((s) => s.userData);
  // init user
  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserData();
      setUserData(data);
    };

    fetchUserData();
  }, [setUserData]);

  // update user
  useEffect(() => {
    const updateUserDataHandler = async () => {
      if (!userData) return;
      await updateUserData(userData);
    };

    updateUserDataHandler();
  }, [userData]);

  return <SessionProvider>{children}</SessionProvider>;
};
