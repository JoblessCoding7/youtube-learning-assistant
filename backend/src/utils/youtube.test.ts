import { describe, expect, it } from "vitest";
import {
  extractVideoId,
  isValidYouTubeUrl,
  normalizeUrl,
} from "./youtube";

describe("normalizeUrl", () => {
  it("adds https when the URL does not include a protocol", () => {
    expect(
      normalizeUrl("youtube.com/watch?v=dQw4w9WgXcQ"),
    ).toBe("https://youtube.com/watch?v=dQw4w9WgXcQ");
  });

  it("preserves https URLs that already include a protocol", () => {
    expect(
      normalizeUrl("https://youtu.be/dQw4w9WgXcQ"),
    ).toBe("https://youtu.be/dQw4w9WgXcQ");
  });

  it("trims whitespace", () => {
    expect(
      normalizeUrl("  youtube.com/watch?v=dQw4w9WgXcQ  "),
    ).toBe("https://youtube.com/watch?v=dQw4w9WgXcQ");
  });
});

describe("isValidYouTubeUrl", () => {
  it("returns true for standard YouTube URLs", () => {
    expect(
      isValidYouTubeUrl(
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      ),
    ).toBe(true);
  });

  it("returns true for YouTube URLs without www", () => {
    expect(
      isValidYouTubeUrl(
        "https://youtube.com/watch?v=dQw4w9WgXcQ",
      ),
    ).toBe(true);
  });

  it("returns true for shortened YouTube URLs", () => {
    expect(
      isValidYouTubeUrl("https://youtu.be/dQw4w9WgXcQ"),
    ).toBe(true);
  });

  it("returns false for non-YouTube URLs", () => {
    expect(
      isValidYouTubeUrl(
        "https://example.com/watch?v=dQw4w9WgXcQ",
      ),
    ).toBe(false);
  });

  it("returns false for malformed URLs", () => {
    expect(
      isValidYouTubeUrl("not a valid url"),
    ).toBe(false);
  });
});

describe("extractVideoId", () => {
  it("extracts a video ID from a standard YouTube URL", () => {
    expect(
      extractVideoId(
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      ),
    ).toBe("dQw4w9WgXcQ");
  });

  it("extracts a video ID from a YouTube URL without www", () => {
    expect(
      extractVideoId(
        "https://youtube.com/watch?v=dQw4w9WgXcQ",
      ),
    ).toBe("dQw4w9WgXcQ");
  });

  it("extracts a video ID from a shortened YouTube URL", () => {
    expect(
      extractVideoId("https://youtu.be/dQw4w9WgXcQ"),
    ).toBe("dQw4w9WgXcQ");
  });

  it("returns null when the video ID is missing", () => {
    expect(
      extractVideoId(
        "https://www.youtube.com/watch?v=",
      ),
    ).toBeNull();
  });

  it("returns null for an invalid video ID", () => {
    expect(
      extractVideoId(
        "https://www.youtube.com/watch?v=test",
      ),
    ).toBeNull();
  });

  it("returns null for an invalid shortened video ID", () => {
    expect(
      extractVideoId("https://youtu.be/short"),
    ).toBeNull();
  });

  it("returns null for a non-YouTube URL", () => {
    expect(
      extractVideoId(
        "https://example.com/watch?v=dQw4w9WgXcQ",
      ),
    ).toBeNull();
  });

  it("returns null for malformed URLs", () => {
    expect(
      extractVideoId("not a valid url"),
    ).toBeNull();
  });
});