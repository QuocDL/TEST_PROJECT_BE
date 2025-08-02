import { Router } from "express";
import {
  createCategory,
  getALlCategory,
  getDetailedCategory,
  updatedCategory,
} from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.get("/all", getALlCategory);
categoryRouter.get("/detail/:id", getDetailedCategory);
categoryRouter.post("/create", createCategory);
categoryRouter.patch("/update/:id", updatedCategory);

export default categoryRouter;
