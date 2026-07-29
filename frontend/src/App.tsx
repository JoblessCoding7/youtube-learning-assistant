import { BookOpenText, BrainCircuit, ListChecks, Sparkles, type LucideIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

type Feature = {
  title: string
  description: string
  icon: LucideIcon
}

const features:Feature[] = [
  {
    title: "Summary",
    description: "Get a concise breakdown of the video in seconds.",
    icon: BookOpenText,
  },
  {
    title: "Key Topics",
    description: "Discover the most important ideas and takeaways instantly.",
    icon: ListChecks,
  },
  {
    title: "Ask AI",
    description: "Dive deeper with focused questions about the content.",
    icon: BrainCircuit,
  },
]

function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.15),_transparent_35%),linear-gradient(135deg,_#f8fafc_0%,_#eef2ff_100%)] px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <section className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_80px_-20px_rgba(15,23,42,0.2)] backdrop-blur md:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
                <Sparkles className="size-4" />
                AI-powered learning in minutes
              </div>

              <div className="space-y-4">
                <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Learn faster from any YouTube video with AI.
                </h1>
                <p className="max-w-xl text-lg text-slate-600 sm:text-xl">
                  Paste a video link, get an instant summary, and ask follow-up questions without watching everything twice.
                </p>
              </div>

              <form onSubmit={(event) => event.preventDefault()}
                    className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm sm:flex-row sm:items-center">
                <label htmlFor="video-url" className="sr-only">
                  YouTube video URL
                </label>
                <input
                  id="video-url"
                  name="videoUrl"
                  type="url"
                  required
                  autoComplete="url"
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="h-12 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200"
                />
                <Button type="submit" size="lg" className="h-12 px-6 text-base shadow-sm">
                  Analyze Video
                </Button>
              </form>
            </div>

            <div className="rounded-[1.5rem] border border-indigo-100 bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white shadow-lg">
              <div className="space-y-4">
                <div className="inline-flex rounded-full bg-white/15 p-2">
                  <Sparkles className="size-5" />
                </div>
                <h2 className="text-2xl font-semibold">
                  Learn faster with AI-guided insights.
                </h2>
                <p className="text-sm leading-6 text-indigo-50/90 sm:text-base">
                  Capture the key ideas, organize the essential points, and explore the material through conversational prompts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="features-heading" className="grid gap-4 md:grid-cols-3">
          <h2 id="features-heading" className="sr-only">
            Key features
          </h2>

          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <article
                key={feature.title}
                className="rounded-[1.25rem] border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-indigo-50 p-3 text-indigo-600">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
              </article>
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default App