import { Button } from "@/components/ui/button";
import { isValidYouTubeUrl } from "@/utils/validation";
import { useState } from "react";
import { extractVideoId } from "@/utils/youtubeUrl";

import {
  analyzeVideo,
  type AnalyzeVideoResponse,
} from "@/services/youtube";

type VideoUrlFormProps = {
  onVideoSelected: (videoId: string) => void;
  onAnalysisComplete: (result: AnalyzeVideoResponse) => void;
};

function VideoUrlForm({
  onVideoSelected,
  onAnalysisComplete,
}: VideoUrlFormProps) {
  const [videoUrl, setVideoUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const isValid = isValidYouTubeUrl(videoUrl);

    if (!isValid) {
      setError("Please enter a valid YouTube video URL.");
      return;
    }

    setError("");

    try {
      setIsLoading(true);

      const videoId = extractVideoId(videoUrl);

      if (videoId) {
        onVideoSelected(videoId);
      }

      const result = await analyzeVideo(videoUrl);

      onAnalysisComplete(result);
    } finally {
      setIsLoading(false);
    }
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

      <Button
        type="submit"
        size="lg"
        disabled={isLoading}
        className="h-12 px-6 text-base shadow-sm"
      >
        {isLoading ? "Analyzing..." : "Analyze Video"}
      </Button>
    </form>
  );
}

export default VideoUrlForm;
