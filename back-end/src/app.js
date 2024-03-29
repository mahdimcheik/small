import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import route from "./routes/router.js";
import routeVideo from "./routes/routeVideo.js";
import routeFavorite from "./routes/routeFavorite.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const reactBuildPath = path.join(__dirname, "/../../front-end/dist");

app.use(express.static(reactBuildPath));

app.use("/", route);
app.use("/", routeVideo);
app.use("/", routeFavorite);
app.get(
  "*.*",
  express.static(path.join(__dirname, "../public"), { maxAge: "1y" })
  // (req, res) => {
  //   res.sendFile(`${reactBuildPath}/index.html`);
  // }
);

export default app;
