import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/portfolio";

export function Projects() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <section id="projects" className="border-b border-border bg-bg py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            path="~/projects"
            title="Selected projects"
            description="Two full-stack builds, end to end — from schema design to the interface that ships."
          />
        </Reveal>

        <div className="mt-14 space-y-8">
          <Reveal delay={0.05}>
            <article className="rounded-2xl border border-border bg-surface p-7 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
                <div>
                  <p className="font-mono text-[12px] text-accent">
                    featured build
                  </p>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl font-medium text-ink">
                    {featured.name}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-muted max-w-[54ch]">
                    {featured.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {featured.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-bg px-3 py-1 font-mono text-[12px] text-ink-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ProjectLinks
                    liveUrl={featured.liveUrl}
                    githubUrl={featured.githubUrl}
                  />
                </div>

                <div>
                  <p className="text-[13px] font-medium text-ink">
                    Key features
                  </p>
                  <ul className="mt-4 space-y-3 border-t border-border pt-4">
                    {featured.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-[14px] leading-relaxed text-ink-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>

          {rest.map((project, idx) => (
            <Reveal key={project.name} delay={0.08 + idx * 0.06}>
              <article className="grid gap-6 rounded-2xl border border-border bg-surface p-7 sm:p-9 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
                <div>
                  <h3 className="font-display text-2xl font-medium text-ink">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-bg px-3 py-1 font-mono text-[12px] text-ink-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ProjectLinks
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                  />
                </div>
                <ul className="space-y-3 border-t border-border pt-5 md:border-t-0 md:border-l md:pt-0 md:pl-10">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-[14px] leading-relaxed text-ink-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectLinks({
  liveUrl,
  githubUrl,
}: {
  liveUrl: string;
  githubUrl: string;
}) {
  if (!liveUrl && !githubUrl) return null;

  return (
    <div className="mt-6 flex flex-wrap items-center gap-4">
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-bg transition-colors hover:bg-accent-strong"
        >
          Live demo
          <ArrowUpRight size={14} />
        </a>
      ) : null}
      {githubUrl ? (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-muted transition-colors hover:text-accent"
        >
          <FaGithub size={14} />
          Source
        </a>
      ) : null}
    </div>
  );
}
