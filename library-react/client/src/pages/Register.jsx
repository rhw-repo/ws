import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { useRegister } from "../hooks/useRegister.js";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const registerMutation = useRegister();
  const navigate = useNavigate();

  function handleEmailChange(e) {
    setEmail(DOMPurify.sanitize(e.target.value));
  }

  function handlePasswordChange(e) {
    setPassword(DOMPurify.sanitize(e.target.value));
  }

  function handleNameChange(e) {
    setName(DOMPurify.sanitize(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    registerMutation.mutate(
      { email, password, name },
      { onSuccess: () => navigate("/") }
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow">
        <h1 className="mb-4 text-xl font-semibold text-taupe-950">Sign Up</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            maxLength={100}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
            maxLength={254}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            minLength={8}
            maxLength={15}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={registerMutation.isPending}
            className="rounded-md bg-taupe-700 px-4 py-2 font-medium text-neutral-50 hover:bg-taupe-600 disabled:opacity-50"
          >
            {registerMutation.isPending ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {registerMutation.isError && (
          <p className="mt-3 text-sm text-red-600">{registerMutation.error.message}</p>
        )}

        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-taupe-950 font-bold hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}