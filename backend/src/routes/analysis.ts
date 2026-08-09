import { Router } from "express";

import {
  extractVideoId,
  isValidYouTubeUrl,
  normalizeUrl,
} from "../utils/youtube.js";

import { getTranscript } from "../service/transcriptService.js";
import { generateSummary } from "../service/aiService.js";

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

  let transcript;

  try {
    transcript = await getTranscript(videoId);
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

  const transcriptText = transcript.map((item) => item.text).join(" ");

  try {
    const summary = await generateSummary(transcriptText);

    return res.status(200).json({
      success: true,
      videoUrl: normalizedUrl,
      videoId,
      transcript,
      summary,
    });
  } catch (error) {
    console.error("Failed to generate summary:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate AI summary.",
    });
  }
});

export default analysisRouter;
