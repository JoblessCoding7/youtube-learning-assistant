import { Router } from "express";

import {
  extractVideoId,
  isValidYouTubeUrl,
  normalizeUrl,
} from "../utils/youtube.js";
import { getTranscript } from "../service/transcriptService.js";

import {
  YoutubeTranscriptDisabledError,
  YoutubeTranscriptNotAvailableError,
  YoutubeTranscriptTooManyRequestError,
  YoutubeTranscriptVideoUnavailableError,
} from "youtube-transcript";

const analysisRouter = Router();

analysisRouter.post("/analyze", async (req, res) => {
  const { videoUrl } = req.body;

  if (typeof videoUrl !== "string" || videoUrl.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "videoUrl is required.",
    });
  }

  const normalizedUrl = normalizeUrl(videoUrl);

  if (!isValidYouTubeUrl(normalizedUrl)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid YouTube video URL.",
    });
  }

  const videoId = extractVideoId(normalizedUrl);

  if (!videoId) {
    return res.status(400).json({
      success: false,
      message: "Unable to extract the YouTube video ID.",
    });
  }

  try {
    const transcript = await getTranscript(videoId);

    return res.status(200).json({
      videoUrl: normalizedUrl,
      success: true,
      videoId,
      transcript,
    });
  } catch (error) {
    if (
      error instanceof YoutubeTranscriptVideoUnavailableError ||
      error instanceof YoutubeTranscriptDisabledError ||
      error instanceof YoutubeTranscriptNotAvailableError
    ) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }

    if (error instanceof YoutubeTranscriptTooManyRequestError) {
      return res.status(429).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to retrieve transcript.",
    });
  }
});

export default analysisRouter;
