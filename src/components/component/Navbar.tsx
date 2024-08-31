import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import PlaceholderWebIcon from "../icons/PlaceholderWebIcon";
import MenuIcon from "../icons/MenuIcon";
import ClientNavbar from "./ClientNavbar";
import { getSession } from "@/lib/actions";

export default async function Navbar() {
  const session = await getSession();
  const handleLogout = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
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
  console.log(session);
  return (
    <nav className="w-full bg-background border-b sticky top-0">
      <div className="container mx-auto max-w-5xl flex items-center justify-between py-4 px-4 md:px-0">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          {/* <MountainIcon className="h-6 w-6 text-primary" /> */}
          <PlaceholderWebIcon className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold">DInfo</span>
        </Link>
        <nav className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MenuIcon className="h-6 w-6 text-primary" />
                <span className="sr-only">Toggle main menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                {/* {session.isLoggedIn === false && (
                  <Link
                    href="/login"
                    className="text-muted-foreground hover:text-foreground w-full"
                    prefetch={false}
                  >
                    <p>Login</p>
                  </Link>
                )}
                {session.isLoggedIn && (
                  <form
                    onSubmit={handleLogout} // this action is not working now...wtf!?!? I am losing my goddamn mind
                    className="text-muted-foreground hover:text-foreground w-full"
                  >
                    <button type="submit">
                      <p>Logout</p>
                    </button>
                  </form>
                )} */}
                <ClientNavbar isLoggedIn={session.isLoggedIn} />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground w-full"
                  prefetch={false}
                >
                  <p>About Us</p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground w-full"
                  prefetch={false}
                >
                  <p>Contact Us</p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href="/signup"
                  className="text-muted-foreground hover:text-foreground w-full"
                  prefetch={false}
                >
                  <p>Signup</p>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Image
                  src="/placeholder.svg"
                  width="32"
                  height="32"
                  className="rounded-full"
                  alt="Avatar"
                  style={{ aspectRatio: "32/32", objectFit: "cover" }}
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            {session.isLoggedIn && <ProfileNav />}
          </DropdownMenu>
        </nav>
      </div>
    </nav>
  );
}

function ProfileNav() {
  return (
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  );
}
