import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Plus, ArrowUpRight, Star, Code, Zap, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TonePage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/30">
                <div className="size-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-xs tracking-wider text-muted-foreground">DAW</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/30">
                <span className="font-mono text-xs tracking-wider text-muted-foreground">music production</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance">
              Tone
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              a web-based digital audio workstation. create, produce, and mix music directly in your browser.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Link href="https://tonedaw.com" target="_blank">
                <Button size="lg" className="group bg-foreground text-background hover:bg-foreground/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90">
                  Open Tone
                  <ArrowUpRight className="ml-2 size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </Link>
              <Link href="https://github.com/soniqaudio/tone" target="_blank">
                <Button size="lg" variant="outline" className="border-border bg-background hover:bg-accent hover:text-accent-foreground">
                  <Star className="mr-2 size-4" />
                  Star on GitHub
                </Button>
              </Link>
            </div>
          </div>

          {/* Screenshot */}
          <div className="max-w-6xl mx-auto">
            <div className="relative w-full rounded-lg overflow-hidden border border-border">
              <Image
                src="/tone.png"
                alt="Tone DAW Screenshot"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Features</h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to create professional music
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="size-6" />,
                  title: "Real-Time Processing",
                  description: "low-latency audio processing powered by the web audio api. create and mix without any noticeable delay."
                },
                {
                  icon: <Code className="size-6" />,
                  title: "Open Source",
                  description: "built by creators, for creators. completely open source and free to use. contribute and help shape the future of web-based music production."
                },
                {
                  icon: <Globe className="size-6" />,
                  title: "Browser-Based",
                  description: "no installation required. works on any device with a modern browser. access your projects from anywhere in the world."
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

      {/* CTA Section */}
      <section className="relative py-12 md:py-16">
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

              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create?</h2>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                  Tone is completely open source and free to use. Start making music in your browser today, or contribute to help shape the future of web-based music production.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="https://github.com/soniqaudio/tone" target="_blank">
                    <Button size="lg" className="group bg-foreground text-background hover:bg-foreground/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90">
                      View Source Code
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

