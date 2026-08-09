export type TranscriptItem = {
  text: string;
  duration: number;
  offset: number;
  lang?: string;
};

export type AnalyzeVideoResponse = {
  success: boolean;
  videoUrl: string;
  videoId: string;
  transcript: TranscriptItem[];
  summary: string;
  keyTakeaways: string[];
};

export async function analyzeVideo(
  videoUrl: string,
): Promise<AnalyzeVideoResponse> {
  const response = await fetch("http://localhost:3000/api/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      videoUrl,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();

    throw new Error(
      errorData.message || "Failed to analyze video",
    );
  }

  return response.json();
}