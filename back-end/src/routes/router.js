import express from "express";

const route = express.Router();

route.get("/users", (req, res) => {
  res.send("done");
});

export default route;
