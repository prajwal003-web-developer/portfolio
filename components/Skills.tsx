import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-border bg-bg-alt py-24 sm:py-28"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            path="~/skills"
            title="Technical skills"
            description="Grouped by where each technology sits in the stack — nothing here I haven't shipped with."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, idx) => (
            <Reveal key={group.label} delay={idx * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-mono text-[13px] text-accent">
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-bg px-3 py-1.5 text-[13px] text-ink transition-colors hover:border-accent hover:text-accent-strong"
                    >
                      {skill}
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
