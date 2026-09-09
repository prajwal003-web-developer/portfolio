import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section
      id="education"
      className="border-b border-border bg-bg-alt py-24 sm:py-28"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading path="~/education" title="Education" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {education.map((entry, idx) => (
            <Reveal key={entry.institution} delay={idx * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 sm:p-7">
                <p className="font-mono text-[12px] text-accent">
                  {entry.period}
                </p>
                <h3 className="mt-2 font-display text-lg font-medium text-ink">
                  {entry.institution}
                </h3>
                <p className="mt-1 text-[13px] text-ink-soft">
                  {entry.location}
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-ink-muted">
                  {entry.program}
                </p>
                {entry.detail ? (
                  <p className="mt-3 border-t border-border pt-3 text-[13px] text-ink-muted">
                    {entry.detail}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
