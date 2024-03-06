import express from "express";
import UserController from "../controllers/UserController.js";

const route = express.Router();

route.get("/users", UserController.browse);
route.get("/users/:email", UserController.read);
route.get("/users/:email/:password", UserController.login);
route.post("/users", UserController.add);
route.delete("/users/:email", UserController.delete);
route.patch("/users/:email", UserController.update);

export default route;
