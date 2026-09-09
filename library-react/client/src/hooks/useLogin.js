import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginRequest } from "../api/auth.js";

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ email, password }) => loginRequest(email, password),
    onSuccess: (user) => {
      queryClient.setQueryData(["currentUser"], user);
    },
  });
}
