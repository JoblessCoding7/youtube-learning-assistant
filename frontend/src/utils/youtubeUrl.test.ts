import { describe, expect, it } from "vitest";

import { extractVideoId } from "./youtubeUrl";

describe("extractVideoId", () => {
  it("extracts a video ID from a standard youtube.com watch URL", () => {
    expect(extractVideoId("https://www.youtube.com/watch?v=dQw4w9WgXcQ")).toBe(
      "dQw4w9WgXcQ",
    );
  });

  it("extracts a video ID from a youtube.com URL without www", () => {
    expect(extractVideoId("https://youtube.com/watch?v=dQw4w9WgXcQ")).toBe(
      "dQw4w9WgXcQ",
    );
  });

  it("extracts a video ID from a shortened youtu.be URL", () => {
    expect(extractVideoId("https://youtu.be/dQw4w9WgXcQ")).toBe(
      "dQw4w9WgXcQ",
    );
  });

  it("returns null for a non-YouTube URL", () => {
    expect(extractVideoId("https://example.com/watch?v=dQw4w9WgXcQ")).toBeNull();
  });

  it("returns null when the video ID is missing", () => {
    expect(extractVideoId("https://www.youtube.com/watch?v=")).toBeNull();
  });

  it("returns null for an invalid video ID such as test", () => {
    expect(extractVideoId("https://www.youtube.com/watch?v=test")).toBeNull();
  });

  it("returns null for malformed URLs", () => {
    expect(extractVideoId("not a valid url")).toBeNull();
  });

  it("extracts a video ID from a protocol-less YouTube URL", () => {
    expect(extractVideoId("youtube.com/watch?v=dQw4w9WgXcQ")).toBe(
      "dQw4w9WgXcQ",
    );
  });

  it("extracts a video ID from a protocol-relative YouTube URL", () => {
    expect(extractVideoId("//youtube.com/watch?v=dQw4w9WgXcQ")).toBe(
      "dQw4w9WgXcQ",
    );
  });
});
