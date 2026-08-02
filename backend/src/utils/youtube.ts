export function normalizeUrl(url: string) {
  const trimmedUrl = url.trim();

  if (
    !trimmedUrl.startsWith("http://") &&
    !trimmedUrl.startsWith("https://")
  ) {
    return `https://${trimmedUrl}`;
  }

  return trimmedUrl;
}

export function isValidYouTubeUrl(url: string) {
  try {
    const parsedUrl = new URL(url);

    return (
      parsedUrl.hostname === "youtube.com" ||
      parsedUrl.hostname === "www.youtube.com" ||
      parsedUrl.hostname === "youtu.be"
    );
  } catch {
    return false;
  }
}