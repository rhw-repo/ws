const API_URL = import.meta.env.VITE_API_URL;

export async function fetchBooks() {
  const res = await fetch(`${API_URL}/books`, { credentials: "include" });
  if (!res.ok) throw new Error("Failed to fetch books");
  return res.json();
}

export async function addBookRequest(book) {
  const res = await fetch(`${API_URL}/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(book),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to add book");
  return data;
}

export async function deleteBookRequest(id) {
  const res = await fetch(`${API_URL}/books/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to delete book");
  return res.json();
}
