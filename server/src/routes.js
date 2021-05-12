import { Router } from "express";
import * as phonebookController from "./controllers/phonebook";

const publicRouter = Router();

publicRouter.get("/", (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version,
  });
});

const privateRouter = Router();

privateRouter.get("/users", phonebookController.getUsers);

privateRouter.get("/users/:id", phonebookController.getUsersById);

privateRouter.post("/users", phonebookController.createUser);

/**
 * all fields requiered for put
 */
privateRouter.put("/users/:id", phonebookController.updateUser);

privateRouter.delete("/users/:id", phonebookController.deleteUser);

export { publicRouter, privateRouter };
