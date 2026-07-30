import { Button } from "@/components/ui/button";
import { analyzeVideo } from "@/services/youtube";
import { isValidYouTubeUrl } from "@/utils/validation";
import { useState } from "react";

function VideoUrlForm() {
  const [videoUrl, setVideoUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] =
    useState<Awaited<ReturnType<typeof analyzeVideo>> | null>(null);

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

      const result = await analyzeVideo(videoUrl);
      setAnalysisResult(result);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-4">
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

          {error && (
            <p className="mt-1 text-sm text-red-500">{error}</p>
          )}
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

      {analysisResult && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Analysis Result
          </h2>

          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <p>
              <span className="font-medium text-slate-800">
                Video URL:
              </span>{" "}
              {analysisResult.videoUrl}
            </p>

            <p>
              <span className="font-medium text-slate-800">
                Status:
              </span>{" "}
              {analysisResult.status}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

export default VideoUrlForm;