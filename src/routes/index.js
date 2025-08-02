import { Router } from "express";
import authRouter from "./auth.routes.js";
import categoryRouter from "./auth.routes.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/categories", categoryRouter);

export default router;
