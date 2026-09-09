import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="bg-dark py-8">
      <div className="container-page flex flex-col items-center justify-between gap-3 border-t border-dark-border pt-8 text-[13px] text-dark-ink-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a
          href="#top"
          className="font-mono transition-colors hover:text-accent-dark"
        >
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
