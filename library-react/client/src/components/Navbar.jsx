import { useCurrentUser } from "../hooks/useCurrentUser.js";
import { useLogout } from "../hooks/useLogout.js";

export default function Navbar() {
  const { data: user } = useCurrentUser();
  const logoutMutation = useLogout();

  if (!user) return null;

  return (
 <nav className="bg-taupe-500 px-6 py-4 shadow-lg">
  <div className="mx-auto flex max-w-[1280px] items-center justify-between">
    <span className="text-lg font-bold text-neutral-50">
      Welcome, {user?.name || user?.email}
    </span>
    <button
      onClick={() => logoutMutation.mutate()}
      disabled={logoutMutation.isPending}
      className="rounded-md border border-gray-300 px-3 py-1.5 font-bold text-neutral-50 hover:bg-taupe-600 disabled:opacity-50"
    >
      {logoutMutation.isPending ? "Logging out..." : "Log Out"}
    </button>
  </div>
</nav>
  );
}
