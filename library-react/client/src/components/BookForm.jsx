import { useState } from "react";
import DOMPurify from "dompurify";
import { useAddBook } from "../hooks/useAddBook.js";

export default function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("to-read");
  const addBookMutation = useAddBook();

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !author) return;

    addBookMutation.mutate(
      { title: DOMPurify.sanitize(title), author: DOMPurify.sanitize(author), status },
      {
        onSuccess: () => {
          setTitle("");
          setAuthor("");
          setStatus("to-read");
        },
      }
    );
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg mt-4">
      <h2 className="mb-4 text-lg font-semibold text-taupe-950">Add a book</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label className="mb-1 block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            maxLength={200}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1">
          <label className="mb-1 block text-sm font-medium text-gray-700">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            maxLength={200}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700 px-2">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="to-read">To Read</option>
            <option value="reading">Reading</option>
            <option value="finished">Finished</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={addBookMutation.isPending}
          className="rounded-md bg-taupe-700 px-4 py-2 font-medium text-neutral-50 hover:bg-taupe-900 disabled:opacity-50"
        >
          {addBookMutation.isPending ? "Adding..." : "Add"}
        </button>
      </form>
      {addBookMutation.isError && (
        <p className="mt-2 text-sm text-red-600">{addBookMutation.error.message}</p>
      )}
    </div>
  );
}