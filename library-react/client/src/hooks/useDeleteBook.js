// client/src/hooks/useDeleteBook.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookRequest } from "../api/books.js";

export function useDeleteBook() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBookRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
}
