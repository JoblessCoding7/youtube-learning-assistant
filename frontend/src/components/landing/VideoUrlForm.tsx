import { Button } from "@/components/ui/button";
import { isValidYouTubeUrl } from "@/utils/validation";
import { useState } from "react";

function VideoUrlForm() {
  const [videoUrl, setVideoUrl] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const isValid = isValidYouTubeUrl(videoUrl);

    if (!isValid) {
      setError("Please enter a valid YouTube video URL.");
      return;
    }

    setError("");
    console.log(videoUrl);
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm sm:flex-row sm:items-start"
    >
      <label htmlFor="video-url" className="sr-only">
        YouTube video URL
      </label>

      <div className="flex-1">
        <input
          id="video-url"
          name="videoUrl"
          type="url"
          required
          autoComplete="url"
          placeholder="https://www.youtube.com/watch?v=..."
          value={videoUrl}
          onChange={(event) => {
            setVideoUrl(event.target.value);
            setError("");
          }}
          className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200"
        />

        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>

      <Button type="submit" size="lg" className="h-12 px-6 text-base shadow-sm">
        Analyze Video
      </Button>
    </form>
  );
}

export default VideoUrlForm;
