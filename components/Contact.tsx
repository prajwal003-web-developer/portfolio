import { ArrowUpRight,  Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="bg-dark py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <p className="font-mono text-[13px] text-accent-dark">~/contact</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl sm:text-4xl font-medium tracking-tight text-dark-ink text-balance">
            Open to internships, junior roles, and full-stack work.
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-dark-ink-muted">
            The fastest way to reach me is by email. I&apos;m also active on
            GitHub and LinkedIn if you&apos;d rather connect there first.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent-dark px-5 py-3 text-sm font-medium text-dark transition-colors hover:brightness-110"
            >
              <Mail size={16} />
              {profile.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-14 grid gap-4 border-t border-dark-border pt-10 sm:grid-cols-3">
            <ContactLink
              icon={<FaGithub size={16} />}
              label="GitHub"
              value="prajwal003-web-developer"
              href={profile.links.github}
            />
            <ContactLink
              icon={<FaLinkedin size={16} />}
              label="LinkedIn"
              value="in/prajwal003"
              href={profile.links.linkedin}
            />
            <ContactLink
              icon={<ArrowUpRight size={16} />}
              label="Website"
              value="prajwalneupane.vercel.app"
              href={profile.links.website}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-xl border border-dark-border px-5 py-4 transition-colors hover:border-accent-dark"
    >
      <span>
        <span className="flex items-center gap-2 text-[12px] text-dark-ink-muted">
          {icon}
          {label}
        </span>
        <span className="mt-1 block font-mono text-[13px] text-dark-ink">
          {value}
        </span>
      </span>
      <ArrowUpRight
        size={15}
        className="text-dark-ink-muted transition-colors group-hover:text-accent-dark"
      />
    </a>
  );
}
