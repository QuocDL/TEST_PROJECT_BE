import { Router } from "express";
import {
  createCategory,
  getALlCategory,
} from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.get("/all", getALlCategory);
categoryRouter.post("/create", createCategory);

export default categoryRouter;
