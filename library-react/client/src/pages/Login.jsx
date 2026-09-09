import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { useLogin } from "../hooks/useLogin.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLogin();
  const navigate = useNavigate();

  function handleEmailChange(e) {
    setEmail(DOMPurify.sanitize(e.target.value));
  }

  function handlePasswordChange(e) {
    setPassword(DOMPurify.sanitize(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    loginMutation.mutate(
      { email, password },
      { onSuccess: () => navigate("/") }
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow">
        <h1 className="mb-4 text-xl font-semibold text-taupe-950">Log In</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
            disabled={loginMutation.isPending}
            className="rounded-md bg-taupe-700 px-4 py-2 font-medium text-neutral-50 hover:bg-taupe-600 disabled:opacity-50"
          >
            {loginMutation.isPending ? "Logging in..." : "Log In"}
          </button>
        </form>

        {loginMutation.isError && (
          <p className="mt-3 text-sm text-red-600">{loginMutation.error.message}</p>
        )}

        <p className="mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-taupe-950 font-bold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}