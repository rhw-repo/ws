import { useBooks } from "../hooks/useBooks.js";
import { useDeleteBook } from "../hooks/useDeleteBook.js";
import StatusBadge from "./StatusBadge.jsx";

export default function BookList() {
  const { data: books, isLoading, isError } = useBooks();
  const deleteBookMutation = useDeleteBook();

  if (isLoading) return <p className="mt-6 text-gray-600">Loading books...</p>;
  if (isError)
    return <p className="mt-6 text-red-600">Failed to load books.</p>;
  if (!books || books.length === 0) {
    return <p className="mt-6 text-gray-600">No books yet — add one above.</p>;
  }

  return (
    <ul className="mt-6 flex flex-col gap-3">
      {books.map((book) => (
        <li
          key={book._id}
          className="flex items-center justify-between rounded-lg bg-white p-6 shadow"
        >
          <div>
            <p className="font-medium text-taupe-950">{book.title}</p>
            <p className="text-sm text-taupe-600">{book.author}</p>
          </div>
          <div className="flex items-center gap-3">
            <StatusBadge status={book.status} />
            <button
              onClick={() => deleteBookMutation.mutate(book._id)}
              disabled={deleteBookMutation.isPending}
              className="rounded-md border border-red-300 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-700 hover:text-neutral-50 disabled:opacity-50 shadow-lg"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
