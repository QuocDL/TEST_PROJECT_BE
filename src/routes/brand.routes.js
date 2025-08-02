import { Router } from "express";
import {
  createBrand,
  getAllBrand,
  getDetailedbrand,
  updateBrand,
} from "../controllers/brand.controller.js";

const brandRouter = Router();

brandRouter.get("/all", getAllBrand);
brandRouter.get("/detail/:id", getDetailedbrand);
brandRouter.post("/create", createBrand);
brandRouter.patch("/update/:id", updateBrand);

export default brandRouter;
