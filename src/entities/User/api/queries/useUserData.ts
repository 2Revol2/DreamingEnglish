import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../getUserData";
import type { UserData } from "../../model/types/type";

export const useUserData = <TSelected = UserData>(select?: (data: UserData) => TSelected) => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUserData,
    structuralSharing: true,
    staleTime: 1000 * 60 * 5,
    select,
  });
};
