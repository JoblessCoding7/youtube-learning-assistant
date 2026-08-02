import { Router } from "express";

import {
  extractVideoId,
  isValidYouTubeUrl,
  normalizeUrl,
} from "../utils/youtube.js";

const analysisRouter = Router();

analysisRouter.post("/analyze", (req, res) => {
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

  return res.status(200).json({
    success: true,
    message: "Video URL received.",
    videoUrl: normalizedUrl,
    videoId,
    status: "pending",
  });
});

export default analysisRouter;