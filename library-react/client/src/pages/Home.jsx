import heroImage from "/pexels-dongdilac-27817983-hero.webp";
import BookForm from "../components/BookForm.jsx";
import BookList from "../components/BookList.jsx";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1280px] px-4 py-8">
      <img
        src={heroImage}
        alt="A cosy reading corner..."
        className="h-64 w-full object-cover object-center md:h-80 mt-4 rounded-sm shadow-lg"
      />
      <BookForm />
      <BookList />
    </main>
  );
}
