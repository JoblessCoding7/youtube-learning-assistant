export async function analyzeVideo(videoUrl: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    videoUrl,
    status: "pending",
  };
}