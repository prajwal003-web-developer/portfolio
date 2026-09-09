import { cn } from "@/lib/utils";

export function SectionHeading({
  path,
  title,
  description,
  tone = "light",
}: {
  path: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="max-w-2xl">
      <p
        className={cn(
          "font-mono text-[13px] tracking-tight",
          tone === "dark" ? "text-accent-dark" : "text-accent"
        )}
      >
        {path}
      </p>
      <h2
        className={cn(
          "mt-3 font-display text-3xl sm:text-4xl font-medium tracking-tight text-balance",
          tone === "dark" ? "text-dark-ink" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-[15px] leading-relaxed",
            tone === "dark" ? "text-dark-ink-muted" : "text-ink-muted"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
