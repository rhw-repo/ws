import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../api/books.js";

export function useBooks() {
  return useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });
}
