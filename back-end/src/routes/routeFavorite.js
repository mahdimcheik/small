import express from "express";
import FavoriteController from "../controllers/FavoriteController.js";

const route = express.Router();

route.get("/favorites/:email", FavoriteController.read);

export default route;
