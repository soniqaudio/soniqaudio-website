import { Button } from "@/components/ui/button"
import { ArrowRight, Plus } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--color-border) 1px, transparent 1px),
              linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, oklch(0.5 0.08 240) 0%, transparent 70%)",
            opacity: 0.05,
          }}
        />
      </div>

      <Plus size={24} strokeWidth={1.5} className="absolute top-24 left-4 md:left-12 text-foreground/30 z-10" />
      <Plus size={24} strokeWidth={1.5} className="absolute top-24 right-4 md:right-12 text-foreground/30 z-10" />
      <Plus size={24} strokeWidth={1.5} className="absolute bottom-24 left-4 md:left-12 text-foreground/30 z-10" />
      <Plus size={24} strokeWidth={1.5} className="absolute bottom-24 right-4 md:right-12 text-foreground/30 z-10" />

      {/* Connecting lines from corners */}
      <div className="absolute top-24 left-0 right-0 h-px bg-border/60" />
      <div className="absolute bottom-24 left-0 right-0 h-px bg-border/60" />
      <div className="absolute top-0 bottom-0 left-4 md:left-12 w-px bg-border/60" />
      <div className="absolute top-0 bottom-0 right-4 md:right-12 w-px bg-border/60" />

      {/* Dashed center line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px border-l border-dashed border-border/50" />

      {/* Corner border frames */}
      <div className="absolute top-20 left-0 w-32 h-32 border-l border-t border-border/40" />
      <div className="absolute top-20 right-0 w-32 h-32 border-r border-t border-border/40" />
      <div className="absolute bottom-20 left-0 w-32 h-32 border-l border-b border-border/40" />
      <div className="absolute bottom-20 right-0 w-32 h-32 border-r border-b border-border/40" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-muted/30">
              <div className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs tracking-wider text-muted-foreground">OPEN SOURCE</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center mb-6 text-balance">
            Crafting apps for{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-br from-foreground via-primary to-foreground bg-clip-text text-transparent">
                music producers
              </span>
              <div className="absolute inset-0 -z-0 bg-primary/10 blur-2xl" style={{ transform: "translateY(20%)" }} />
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-10 max-w-2xl mx-auto leading-relaxed">
            Building powerful, open-source tools for the next generation of audio creators. Free forever.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="#projects">
              <Button size="lg" className="group">
                Explore Projects
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="https://github.com/soniqaudio" target="_blank">
              <Button size="lg" variant="outline">
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
