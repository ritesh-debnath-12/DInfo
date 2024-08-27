import Link from "next/link";
import PlaceholderWebIcon from "../icons/PlaceholderWebIcon";

export default function Footer() {
    return (
        <footer className="w-full bg-muted py-8 px-4">
        <div className="container mx-auto max-w-5xl flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <PlaceholderWebIcon />
            <span className="text-lg font-bold">DInfo</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Privacy Policy
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">
            &copy; 2024 DInfo. All rights reserved.
          </p>
        </div>
      </footer>
    )
}