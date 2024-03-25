import express from "express";
import VideoController from "../controllers/VideoController.js";

const route = express.Router();

route.get("/videos", VideoController.browse);
route.get("/videos/:id", VideoController.read);
route.post("/videos", VideoController.add);
route.patch("/videos", VideoController.update);
route.delete("/videos/:id", VideoController.delete);

export default route;
