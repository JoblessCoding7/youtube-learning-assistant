export function isValidYouTubeUrl(url: string) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}