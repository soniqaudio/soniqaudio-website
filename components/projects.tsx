"use client"

import { Button } from "@/components/ui/button"
import { Plus, ArrowUpRight, Star } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function Projects() {
  const router = useRouter()
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/30 mb-6">
            <div className="size-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs tracking-wider text-muted-foreground">PROJECTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Current projects</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Creative audio and music apps built by musicians, for musicians.
          </p>
        </div>

        {/* Projects grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tone project card */}
            <div 
              onClick={() => router.push("/tone")}
              className="relative group h-full cursor-pointer"
            >
              {/* Card content */}
              <div className="relative border border-border bg-accent/80 rounded-lg h-full flex flex-col">
                {/* Corner plus icons */}
                <Plus
                  size={24}
                  strokeWidth={1}
                  className="absolute -top-[12.5px] -left-[11.5px] z-10 text-foreground/30"
                />
                <Plus
                  size={24}
                  strokeWidth={1}
                  className="absolute -top-[12.5px] -right-[11.5px] z-10 text-foreground/30"
                />
                <Plus
                  size={24}
                  strokeWidth={1}
                  className="absolute -bottom-[12.5px] -left-[11.5px] z-10 text-foreground/30"
                />
                <Plus
                  size={24}
                  strokeWidth={1}
                  className="absolute -bottom-[12.5px] -right-[11.5px] z-10 text-foreground/30"
                />

                {/* Side border lines */}
                <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l border-border" />
                <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r border-border" />

                <div className="p-8 md:p-12 flex-1 flex flex-col">
                  <div className="flex flex-col gap-6 flex-1">
                    {/* Project badge */}
                    <div className="flex flex-wrap gap-2">
                      <div className="inline-flex items-center gap-2 px-2 py-1 rounded border border-primary/20 bg-primary/5">
                        <span className="font-mono text-xs font-semibold text-primary tracking-wider">DAW</span>
                      </div>
                      <div className="inline-flex items-center gap-2 px-2 py-1 rounded border border-primary/20 bg-primary/5">
                        <span className="font-mono text-xs font-semibold text-primary tracking-wider">music production</span>
                      </div>
                    </div>

                    {/* Project name */}
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-primary transition-colors">
                      Tone
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6 flex-1">
                      a web-based digital audio workstation. create, produce, and mix music directly in your browser.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 mt-auto" onClick={(e) => e.stopPropagation()}>
                      <a href="https://tonedaw.com" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <Button className="group bg-foreground text-background hover:bg-foreground/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90">
                          Open Tone
                          <ArrowUpRight className="ml-2 size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Button>
                      </a>
                      <a href="https://github.com/soniqaudio/tone" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <Button variant="outline" className="border-border bg-background hover:bg-accent hover:text-accent-foreground">
                          <Star className="mr-2 size-4" />
                          Star on GitHub
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chroma project card */}
            <div 
              onClick={() => router.push("/chroma")}
              className="relative group h-full cursor-pointer"
            >
              {/* Card content */}
              <div className="relative border border-border bg-accent/80 rounded-lg h-full flex flex-col">
                {/* Corner plus icons */}
                <Plus
                  size={24}
                  strokeWidth={1}
                  className="absolute -top-[12.5px] -left-[11.5px] z-10 text-foreground/30"
                />
                <Plus
                  size={24}
                  strokeWidth={1}
                  className="absolute -top-[12.5px] -right-[11.5px] z-10 text-foreground/30"
                />
                <Plus
                  size={24}
                  strokeWidth={1}
                  className="absolute -bottom-[12.5px] -left-[11.5px] z-10 text-foreground/30"
                />
                <Plus
                  size={24}
                  strokeWidth={1}
                  className="absolute -bottom-[12.5px] -right-[11.5px] z-10 text-foreground/30"
                />

                {/* Side border lines */}
                <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l border-border" />
                <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r border-border" />

                <div className="p-8 md:p-12 flex-1 flex flex-col">
                  <div className="flex flex-col gap-6 flex-1">
                    {/* Project badge */}
                    <div className="flex flex-wrap gap-2">
                      <div className="inline-flex items-center gap-2 px-2 py-1 rounded border border-primary/20 bg-primary/5">
                        <span className="font-mono text-xs font-semibold text-primary tracking-wider">piano</span>
                      </div>
                      <div className="inline-flex items-center gap-2 px-2 py-1 rounded border border-primary/20 bg-primary/5">
                        <span className="font-mono text-xs font-semibold text-primary tracking-wider">visuals</span>
                      </div>
                    </div>

                    {/* Project name */}
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-primary transition-colors">
                      Chroma
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6 flex-1">
                      transform midi performances into expressive visual art. chroma turns your piano performances into beautiful, dynamic visualizations.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 mt-auto" onClick={(e) => e.stopPropagation()}>
                      <a href="https://github.com/soniqaudio/chroma" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <Button variant="outline" className="border-border bg-background hover:bg-accent hover:text-accent-foreground">
                          <Star className="mr-2 size-4" />
                          Star on GitHub
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
