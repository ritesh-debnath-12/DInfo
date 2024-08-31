"use client";

// had to make a whole new component just to handle logout...seesh

import Link from "next/link";

export default function ClientNavbar({ isLoggedIn }: { isLoggedIn: boolean }) {
  //   const handleLogout = async (e: React.FormEvent) => {
  //     e.preventDefault();
  //     const res = await fetch("/api/logout", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (res.ok) {
  //       window.location.href = "/login";
  //     } else {
  //       console.error("Logout failed");
  //     }
  //   };

  const handleLogout = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent default form submission
    const res = await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      window.location.href = "/login"; // Redirect after successful logout
    } else {
      console.error("Logout failed");
    }
  };

  return (
    <nav className="flex items-center gap-4">
      {isLoggedIn ? (
        <form onSubmit={handleLogout} method="POST">
          <button type="submit">Logout</button>
        </form>
      ) : (
        <Link href="/login">
          <p>Login</p>
        </Link>
      )}
    </nav>
  );
}
