import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerRequest } from "../api/auth.js";

export function useRegister() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ email, password, name }) =>
      registerRequest(email, password, name),
    onSuccess: (user) => {
      queryClient.setQueryData(["currentUser"], user);
    },
  });
}
