import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const useIsAuthenticated = () => {
  const { status } = useSession();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(status === "authenticated");
  }, [status]);

  return isAuthenticated;
};
