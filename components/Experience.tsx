import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-dark-border bg-dark py-24 sm:py-28"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            path="~/experience"
            title="Work experience"
            tone="dark"
          />
        </Reveal>

        <div className="mt-14 space-y-10">
          {experience.map((job, idx) => (
            <Reveal key={job.org} delay={idx * 0.08}>
              <div className="grid gap-6 border-l-2 border-dark-border pl-6 sm:grid-cols-[1fr_2.2fr] sm:gap-10 sm:pl-8">
                <div>
                  <p className="font-display text-lg font-medium text-dark-ink">
                    {job.role}
                  </p>
                  <p className="mt-1 text-[14px] text-accent-dark">
                    {job.org}
                  </p>
                  <p className="mt-1 text-[13px] text-dark-ink-muted">
                    {job.location}
                  </p>
                  <p className="mt-1 font-mono text-[12px] text-dark-ink-muted">
                    {job.period}
                  </p>
                </div>
                <ul className="space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[14px] leading-relaxed text-dark-ink-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-dark" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
