import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOutsideTime } from "./addOutsideTime";

export const useAddOutsideTime = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (outsideTime: number) => {
      return addOutsideTime(outsideTime);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};
