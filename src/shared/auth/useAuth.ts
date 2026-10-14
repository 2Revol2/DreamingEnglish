import { useSession } from "next-auth/react";

export function useAuth() {
  const { data: session, status } = useSession();

  return {
    status,
    userId: status === "authenticated" ? session.user.id : null,
    isLoading: status === "loading",
    isGuest: status === "unauthenticated",
    isAuthenticated: status === "authenticated",
  };
}
