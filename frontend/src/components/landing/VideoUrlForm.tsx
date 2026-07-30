import { Button } from "@/components/ui/button";
import { useState } from "react";

function VideoUrlForm() {
  const [videoUrl, setVideoUrl] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Handle form submission logic here
    console.log(videoUrl);
  }

  return (
    <form
      onSubmit={handleSubmit}
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
        value={videoUrl}
        onChange={(event) => setVideoUrl(event.target.value)}
        className="h-12 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200"
      />
      <Button type="submit" size="lg" className="h-12 px-6 text-base shadow-sm">
        Analyze Video
      </Button>
    </form>
  );
}

export default VideoUrlForm;
