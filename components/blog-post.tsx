"use client"

import Link from "next/link"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { ReactNode } from "react"

interface BlogPostPageProps {
  post: {
    title: string
    date: string
    readTime: string
    category: string
  }
  content: ReactNode
}

export function BlogPostPage({ post, content }: BlogPostPageProps) {

  return (
    <article className="relative min-h-[90vh] py-24 md:py-32">
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
        <div className="max-w-3xl mx-auto">
          {/* Back button */}
          <div className="mb-8">
            <Button
              variant="ghost"
              asChild
              className="group/btn p-0 h-auto font-normal text-muted-foreground hover:text-foreground"
            >
              <Link href="/blog">
                <ArrowLeft className="mr-2 size-4 group-hover/btn:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article card */}
          <div className="group relative border-y border-border bg-accent/80 border-border">
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

            <div className="p-8 md:p-12">
              <div className="flex flex-col gap-6">
                {/* Category badge */}
                <div className="inline-flex items-center gap-2 px-2 py-1 rounded border border-primary/20 bg-primary/5 w-fit">
                  <span className="font-mono text-xs font-semibold text-primary tracking-wider">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{post.title}</h1>

                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="size-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* Article content */}
                <div className="prose prose-invert max-w-none">
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    {content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

