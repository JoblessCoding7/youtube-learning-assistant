function isValidVideoId(videoId: string): boolean {
  return /^[A-Za-z0-9_-]{11}$/.test(videoId);
}

export function extractVideoId(url: string): string | null {
  try {
    const normalizedUrl =
      url.startsWith("http://") || url.startsWith("https://")
        ? url
        : `https://${url}`;

    const parsedUrl = new URL(normalizedUrl);

    let videoId: string | null = null;

    if (parsedUrl.hostname === "youtu.be") {
      videoId = parsedUrl.pathname.slice(1) || null;
    }

    if (
      parsedUrl.hostname === "youtube.com" ||
      parsedUrl.hostname === "www.youtube.com"
    ) {
      videoId = parsedUrl.searchParams.get("v");
    }

    if (!videoId || !isValidVideoId(videoId)) {
      return null;
    }

    return videoId;
  } catch {
    return null;
  }
}