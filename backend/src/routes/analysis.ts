import {Router} from "express";

const analysisRouter = Router();

analysisRouter.post("/analyze", (req, res) => {
    console.log(req.body);

    res.json({
        success: true,
        videoUrl: req.body.videoUrl,
    });
});

export default analysisRouter;