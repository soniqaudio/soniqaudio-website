import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogPostPage } from "@/components/blog-post"
import Link from "next/link"
import Image from "next/image"

export default function IntroducingSoniqaudio() {
  const post = {
    title: "Introducing SoniqAudio",
    date: "2025-11-11",
    readTime: "3 min read",
    category: "Announcements",
  }

  const content = (
    <>
      <p className="text-lg">
        as a music producer for 10+ years i've spent thousands of hours in my daw, at the piano, making beats and i've been loving every second of it ever since
      </p>

      <p>
        over the last year i got into the dev world and started building my own little apps, websites and more, but i always wanted to build fun, creative and useful apps in the audio / music space
      </p>

      <p>
        in march i started{" "}
        <Link href="https://soniq-audio.com" target="_blank" className="text-primary hover:underline">
          soniqaudio
        </Link>{" "}
        with the same concept as of today, but i dropped off like 2 months later because i (and AI) wasn't good enough yet
      </p>

      <p>
        but now things changed and i'm reviving this idea again, plus everything is gonna be open source so i can give back to the community
      </p>

      <div className="h-px bg-border my-8" />

      <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">currently i'm working on two projects:</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-3">
            tone: a web daw inspired by fl studio
          </h3>
          <p className="mb-4">
            <Link 
              href="https://github.com/soniqaudio/tone" 
              target="_blank" 
              className="text-primary hover:underline"
            >
              github.com/soniqaudio/tone
            </Link>
          </p>
          <div className="relative w-full my-6 rounded-lg overflow-hidden border border-border">
            <Image
              src="/tone.png"
              alt="Tone DAW Screenshot"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-foreground mb-3">
            chroma: a piano midi visualization app
          </h3>
          <p className="mb-4">
            <Link 
              href="https://github.com/soniqaudio/chroma" 
              target="_blank" 
              className="text-primary hover:underline"
            >
              github.com/soniqaudio/chroma
            </Link>
          </p>
          <div className="relative w-full my-6 rounded-lg overflow-hidden border border-border">
            <Image
              src="/synesthesia.png"
              alt="Chroma Screenshot"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <p className="mt-8">
        i have many other ideas that i want to explore as well, so you can expect basically anything in the audio / music space
      </p>

      <p>
        feel free to follow on the journey on x{" "}
        <Link href="https://x.com/soniqaudio_" target="_blank" className="text-primary hover:underline">
          @soniqaudio_
        </Link>{" "}
        and{" "}
        <Link href="https://x.com/rvm0n_" target="_blank" className="text-primary hover:underline">
          @rvm0n_
        </Link>{" "}
        for development updates, thoughts on music, audio and ai in general, piano videos and beats
      </p>

      <div className="flex flex-wrap gap-4 mt-6">
        <Link 
          href="https://github.com/soniqaudio" 
          target="_blank" 
          className="text-primary hover:underline"
        >
          github.com/soniqaudio
        </Link>
        <Link 
          href="https://soniq-audio.com" 
          target="_blank" 
          className="text-primary hover:underline"
        >
          soniq-audio.com
        </Link>
      </div>
    </>
  )

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <BlogPostPage post={post} content={content} />
      <Footer />
    </div>
  )
}

