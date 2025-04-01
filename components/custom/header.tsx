import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 h-16 border-b bg-background px-4 shadow-sm">
      <div className="mx-auto container h-full flex gap-12 items-center">
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
      </div>
    </header>
  );
}
