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
    <nav className="w-full bg-transparent backdrop-blur-[20px] bg-[linear-gradient(120_deg,rgba(255,255,255,0.3),rgba(0,0,0,0.2))] sticky top-0">
      <div className="container mx-auto max-w-5xl flex items-center justify-between py-4 px-4 md:px-0">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          {/* <MountainIcon className="h-6 w-6 text-primary" /> */}
          <PlaceholderWebIcon className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold">DInfo</span>
        </Link>
        <nav className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <p className="text-muted-foreground hover:text-foreground cursor-pointer">Disasters</p>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Disasters</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link
                    href="/disasters"
                    className="text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    <p>Define Disaster</p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Various disasters</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link
                    href="/disasters/typhoon-info"
                    className="text-muted-foreground"
                    prefetch={false}
                  >
                    <p>Typhoons</p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/disasters/earthquake-info"
                    className="text-muted-foreground"
                    prefetch={false}
                  >
                    <p>Earthquakes</p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/disasters/flood-info"
                    className="text-muted-foreground"
                    prefetch={false}
                  >
                    <p>Floods</p>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <p>About Us</p>
            </Link>
          </div>
          <div className="flex lg:hidden">
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
                <ClientNavbar isLoggedIn={session.isLoggedIn} />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href="/disasters"
                  className="text-muted-foreground hover:text-foreground w-full"
                  prefetch={false}
                >
                  <p>Disasters</p>
                </Link>
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
          </div>
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
