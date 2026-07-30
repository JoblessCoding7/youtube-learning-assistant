export async function analyzeVideo(videoUrl: string) {
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
    throw new Error("Failed to analyze video");
  }

  return response.json();
}