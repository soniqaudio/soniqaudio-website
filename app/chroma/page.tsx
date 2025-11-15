import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Plus, ArrowUpRight, Star, Palette, Music, Sparkles } from "lucide-react"
import Link from "next/link"

export default function ChromaPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24">
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

        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/30 mb-6">
              <div className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs tracking-wider text-muted-foreground">VISUALIZATION</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance">
              chroma
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              transform midi performances into expressive visual art. a piano midi visualization app that creates beautiful, dynamic visuals from your music.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="https://github.com/soniqaudio/chroma" target="_blank">
                <Button size="lg" className="group bg-foreground text-background hover:bg-foreground/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90">
                  view on github
                  <ArrowUpRight className="ml-2 size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </Link>
              <Link href="https://github.com/soniqaudio/chroma" target="_blank">
                <Button size="lg" variant="outline" className="border-border bg-background hover:bg-accent hover:text-accent-foreground">
                  <Star className="mr-2 size-4" />
                  star on github
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">features</h2>
              <p className="text-lg text-muted-foreground">
                bring your music to life with stunning visuals
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Music className="size-6" />,
                  title: "midi support",
                  description: "connect your midi keyboard or load midi files. real-time visualization that responds to every note, velocity, and expression."
                },
                {
                  icon: <Palette className="size-6" />,
                  title: "customizable visuals",
                  description: "adjust color mapping, particle effects, trails, and more. create visuals that match your artistic vision and style."
                },
                {
                  icon: <Sparkles className="size-6" />,
                  title: "real-time rendering",
                  description: "smooth, responsive visuals that react instantly to your performance. powered by canvas api for optimal performance."
                }
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="relative border-y border-border bg-accent/80 p-8"
                >
                  <div className="mb-4 text-primary">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & CTA Section */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative border-y border-border bg-accent/80 p-8 md:p-12">
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

              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">powered by modern web technologies</h2>
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {["Web Audio API", "Canvas API", "MIDI", "TypeScript"].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm font-mono border border-border rounded-full bg-background/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                  chroma combines the power of web audio and canvas apis to create stunning, real-time visualizations. 
                  open source and built for creators who want to see their music come alive.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="https://github.com/soniqaudio/chroma" target="_blank">
                    <Button size="lg" className="group bg-foreground text-background hover:bg-foreground/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90">
                      view source code
                      <ArrowUpRight className="ml-2 size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

