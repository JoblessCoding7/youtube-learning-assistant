export async function analyzeVideo(videoUrl: string) {
  return {
    videoUrl,
    status: "pending",
  };
}