import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import route from "./routes/router.js";

dotenv.config();
const app = express();
app.use(cors());

app.use("/", route);

export default app;
