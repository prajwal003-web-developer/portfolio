import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { problemSolving } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="border-b border-border bg-bg py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            path="~/about"
            title="Background"
            description="A short summary of where I work, study, and focus my energy right now."
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.05}>
            <div className="space-y-5 text-[15px] leading-relaxed text-ink-muted max-w-[62ch]">
              <p>
                I&apos;m a full-stack web developer working primarily with{" "}
                <span className="text-ink">JavaScript, TypeScript, and the
                MERN stack</span>. My recent work centres on Next.js
                applications — building out REST APIs, structuring database
                schemas, and wiring up authentication that actually holds up
                in production.
              </p>
              <p>
                I got hands-on experience as a Junior Developer Intern at
                Astral Techsoft, where I worked across the stack: building
                responsive frontend components, contributing RESTful APIs,
                and going through code review as part of a team rather than
                working in isolation.
              </p>
              <p>
                Alongside application development, I&apos;ve put real hours
                into Data Structures and Algorithms — {problemSolving.headline.toLowerCase()},
                which keeps my problem-solving sharp for the kind of
                architecture and debugging decisions that don&apos;t have an
                obvious answer.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7 shadow-[0_1px_0_0_rgba(16,21,28,0.03)]">
              <p className="font-mono text-[12px] uppercase tracking-wide text-ink-soft">
                currently
              </p>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-[13px] text-ink-soft">Studying</dt>
                  <dd className="mt-0.5 text-[15px] text-ink">
                    B.Tech in Computer Science &amp; Engineering, ADTU
                  </dd>
                </div>
                <div>
                  <dt className="text-[13px] text-ink-soft">Focused on</dt>
                  <dd className="mt-0.5 text-[15px] text-ink">
                    Next.js, scalable APIs &amp; database architecture
                  </dd>
                </div>
                <div>
                  <dt className="text-[13px] text-ink-soft">Based in</dt>
                  <dd className="mt-0.5 text-[15px] text-ink">
                    Nepal, working with teams remotely
                  </dd>
                </div>
              </dl>

              <div className="mt-6 border-t border-border pt-5">
                <p className="font-display text-2xl font-medium text-ink">
                  100+
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-muted">
                  DSA problems solved across core data structures and
                  algorithms
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
