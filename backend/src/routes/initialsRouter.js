import express from "express";
import { InitialsController } from "../controllers/InitialsController.js";

const initialsRouter = express.Router();

initialsRouter.get("/", InitialsController.initials);

export default initialsRouter;
