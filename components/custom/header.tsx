import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex gap-12 h-16 items-center border-b bg-background px-4 shadow-sm">
      <div className="flex items-center space-x-2">
        <h1 className="text-lg font-bold">
          <Link href="/" className="cursor-pointer">
            NCC-Template
          </Link>
        </h1>
      </div>
      <nav>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/tasks">Tasks</Link>
          </li>
        </ul>
      </nav>
      <div className="ml-auto flex items-center space-x-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
