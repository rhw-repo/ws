import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBookRequest } from "../api/books.js";

export function useAddBook() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addBookRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
}
