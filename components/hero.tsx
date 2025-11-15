"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Plus, Star } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Hero() {
  const [starCount, setStarCount] = useState<number | null>(null)

  useEffect(() => {
    // Fetch star count from our API route
    fetch('/api/github-stars')
      .then((res) => res.json())
      .then((data) => {
        if (data.stars !== undefined) {
          setStarCount(data.stars)
        }
      })
      .catch((error) => {
        console.error('Failed to fetch star count:', error)
      })
  }, [])

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

      {/* Corner plus icons - aligned to grid intersections (80px grid) */}
      <Plus size={24} strokeWidth={1.5} className="absolute text-foreground/30 z-10" style={{ top: '160px', left: '80px', transform: 'translate(-50%, -50%)' }} />
      <Plus size={24} strokeWidth={1.5} className="absolute text-foreground/30 z-10" style={{ top: '160px', right: '72px', transform: 'translate(50%, -50%)' }} />
      <Plus size={24} strokeWidth={1.5} className="absolute text-foreground/30 z-10" style={{ bottom: '55px', left: '80px', transform: 'translate(-50%, 50%)' }} />
      <Plus size={24} strokeWidth={1.5} className="absolute text-foreground/30 z-10" style={{ bottom: '55px', right: '72px', transform: 'translate(50%, 50%)' }} />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/30">
              <div className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs tracking-wider text-muted-foreground">OPEN SOURCE</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center mb-6 text-balance">
            Music production{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-br from-foreground via-primary to-foreground bg-clip-text text-transparent">
                built for the web.
              </span>
              <div className="absolute inset-0 -z-0 bg-primary/10 blur-2xl" style={{ transform: "translateY(20%)" }} />
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-10 max-w-2xl mx-auto leading-relaxed">
            Modern, open-source apps for music producers, pianists and audio creators.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="#projects" className="cursor-pointer">
              <Button size="lg" className="group bg-foreground text-background hover:bg-foreground/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90">
                Explore Apps
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="https://github.com/soniqaudio" target="_blank" className="cursor-pointer">
              <Button size="lg" variant="outline" className="border border-foreground/30 bg-background/50 hover:border-foreground/40 hover:bg-background/70 hover:text-foreground dark:border-foreground/25 dark:bg-background/40 dark:hover:border-foreground/35 dark:hover:bg-background/60 transition-all">
                <Star className="mr-2 size-4" />
                Star on GitHub
                {starCount !== null && (
                  <span className="ml-2 px-2 py-0.5 rounded-full bg-muted/60 text-foreground text-sm">
                    {starCount.toLocaleString()}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
