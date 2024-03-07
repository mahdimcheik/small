import express from "express";
import UserController from "../controllers/UserController.js";
import Authentification from "../middlewares/Authentification.js";

const route = express.Router();

route.get(
  "/users",
  Authentification.authenticate,
  Authentification.authenticateAdmin,
  UserController.browse
);
route.get(
  "/users/:email",
  Authentification.authenticate,
  Authentification.authenticateAdmin,
  UserController.read
);
route.get("/users/:email/:password", UserController.login);
route.post("/users", UserController.add);
route.delete("/users", Authentification.authenticate, UserController.delete);
route.patch("/users", Authentification.authenticate, UserController.update);

export default route;
