import { Button } from "@/components/ui/button"

function VideoUrlForm() {
  return(
        <form
          onSubmit={(event) => event.preventDefault()}
          className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm sm:flex-row sm:items-center"
        >
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
          <Button
            type="submit"
            size="lg"
            className="h-12 px-6 text-base shadow-sm"
          >
            Analyze Video
          </Button>
        </form>
  )
}
export default VideoUrlForm;