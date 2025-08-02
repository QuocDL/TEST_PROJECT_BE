import { Router } from "express";
import {
  createCategory,
  getALlCategory,
  getDetailedCategory,
} from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.get("/all", getALlCategory);
categoryRouter.get("/detail/:id", getDetailedCategory);
categoryRouter.post("/create", createCategory);

export default categoryRouter;
