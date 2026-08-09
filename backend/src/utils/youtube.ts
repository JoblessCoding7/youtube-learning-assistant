function isValidVideoId(videoId: string): boolean {
  return /^[A-Za-z0-9_-]{11}$/.test(videoId);
}

function isYouTubeHostname(hostname: string): boolean {
  return (
    hostname === "youtube.com" ||
    hostname === "www.youtube.com" ||
    hostname === "youtu.be"
  );
}

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

    return isYouTubeHostname(parsedUrl.hostname);
  } catch {
    return false;
  }
}

export function extractVideoId(url: string): string | null {
  try {
    const parsedUrl = new URL(url);

    let videoId: string | null = null;

    if (parsedUrl.hostname === "youtu.be") {
      videoId = parsedUrl.pathname.slice(1).trim() || null;
    } else if (
      parsedUrl.hostname === "youtube.com" ||
      parsedUrl.hostname === "www.youtube.com"
    ) {
      videoId = parsedUrl.searchParams.get("v")?.trim() || null;
    }

    if (!videoId || !isValidVideoId(videoId)) {
      return null;
    }

    return videoId;
  } catch {
    return null;
  }
}