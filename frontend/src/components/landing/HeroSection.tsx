import { Sparkles } from "lucide-react"

function HeroSection() {
  return (
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
  )
}

export default HeroSection