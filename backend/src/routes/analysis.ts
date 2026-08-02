import { Router } from "express";

import {
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

  return res.status(200).json({
    success: true,
    message: "Video URL received.",
    videoUrl: normalizedUrl,
    status: "pending",
  });
});

export default analysisRouter;