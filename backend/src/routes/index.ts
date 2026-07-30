import { Router } from "express";
import analysisRouter from "./analysis.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Backend is running");
});

router.use("/api", analysisRouter);

export default router;