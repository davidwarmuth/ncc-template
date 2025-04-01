export default function Footer() {
  return (
    <footer className="p-4 border-t">
      <div className="mx-auto container flex flex-col items-center justify-between gap-x-3 gap-y-1 text-center text-sm text-muted-foreground sm:flex-row">
        <p>
          Next-Convex-Clerk &copy;{new Date().getFullYear()}. All rights
          reserved.
        </p>
        <p className="text-xs">
          Developed by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary transition-colors hover:text-accent-foreground"
            href="https://www.davidwarmuth.de/"
          >
            David Warmuth
          </a>
        </p>
      </div>
    </footer>
  );
}
