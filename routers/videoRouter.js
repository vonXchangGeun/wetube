import express from "express";

const videoRouter = express.Router();

videoRouter.get(routes.video, (req, res) => res.send("Videos"));
videoRouter.get(routes.upload, (req, res) => res.send("Upload"));
videoRouter.get(routes.videoDetail, (req, res) => res.send("VideoDetail"));
videoRouter.get(routes.editVideo, (req, res) => res.send("EditVideo"));
videoRouter.get(routes.deleteVideo, (req, res) => res.send("DeleteVideo"));

export default videoRouter;
