import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  addToCart,
  getAllCart,
  updateQuantityCart,
} from "../controllers/cart.controller.js";

const cartRoute = Router();

cartRoute.use(authMiddleware);

cartRoute.get("/my-cart", getAllCart);
cartRoute.post("/add", addToCart);
cartRoute.patch("/update-quantity", updateQuantityCart);

export default cartRoute;
