import { Button } from "@/components/ui/button"
import { Plus, ArrowUpRight, Github } from "lucide-react"
import Link from "next/link"

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border mb-6">
            <div className="size-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs tracking-wider">PROJECTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Open source audio tools</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Professional-grade software built by creators, for creators
          </p>
        </div>

        {/* Project card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Corner plus icons */}
            <Plus
              size={24}
              strokeWidth={1.5}
              className="absolute -top-[12.5px] -left-[11.5px] text-foreground/30 z-10"
            />
            <Plus
              size={24}
              strokeWidth={1.5}
              className="absolute -top-[12.5px] -right-[11.5px] text-foreground/30 z-10"
            />
            <Plus
              size={24}
              strokeWidth={1.5}
              className="absolute -bottom-[12.5px] -left-[11.5px] text-foreground/30 z-10"
            />
            <Plus
              size={24}
              strokeWidth={1.5}
              className="absolute -bottom-[12.5px] -right-[11.5px] text-foreground/30 z-10"
            />

            {/* Border lines */}
            <div className="absolute inset-y-0 -inset-y-6 left-0 w-px bg-border/60 pointer-events-none" />
            <div className="absolute inset-y-0 -inset-y-6 right-0 w-px bg-border/60 pointer-events-none" />

            {/* Card content */}
            <div className="relative border-y border-border/60 bg-card/50 hover:bg-accent/80 hover:border-border transition-all duration-300 bg-[radial-gradient(35%_80%_at_25%_0%,hsl(var(--primary)/.1),transparent)]">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    {/* Project badge */}
                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded border border-primary/20 bg-primary/5 mb-4">
                      <span className="font-mono text-xs font-semibold text-primary tracking-wider">FLAGSHIP</span>
                    </div>

                    {/* Project name */}
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-primary transition-colors">
                      Tone
                    </h3>

                    {/* Project subtitle */}
                    <div className="font-mono text-sm text-muted-foreground mb-4 tracking-wide">tonedaw.com</div>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                      A powerful web-based digital audio workstation inspired by industry leaders like FL Studio and
                      Ableton. Create, produce, and mix music entirely in your browser with professional-grade tools.
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {["Web Audio API", "Next.js", "TypeScript", "Canvas API"].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono border border-border rounded-full bg-muted/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      <Button className="group">
                        Launch Tone
                        <ArrowUpRight className="ml-2 size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Button>
                      <Link href="https://github.com/soniqaudio/tonedaw" target="_blank">
                        <Button variant="outline">
                          <Github className="mr-2 size-4" />
                          View Source
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Visual indicator */}
                  <div className="flex flex-col items-center gap-2 opacity-60">
                    <div className="size-20 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                      <svg className="size-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9 18V5l12-2v13" />
                        <circle cx="6" cy="18" r="3" />
                        <circle cx="18" cy="16" r="3" />
                      </svg>
                    </div>
                    <span className="font-mono text-xs">DAW</span>
                  </div>
                </div>
              </div>

              {/* Dashed center line */}
              <div className="absolute inset-y-0 -inset-y-6 left-1/2 w-px border-l border-dashed border-border/50 hidden lg:block pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Coming soon hint */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground font-mono">More projects coming soon...</p>
        </div>
      </div>
    </section>
  )
}
