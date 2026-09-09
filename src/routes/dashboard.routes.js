import express from "express";

import dashboardController from "../controllers/dashboard.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.middleware.js";

import { dashboardSchema } from "../validations/dashboard.validation.js";

const router = express.Router();

router.use(authMiddleware);

router.get(
  "/",
  validate(dashboardSchema, "query"),
  dashboardController.getDashboard,
);

export default router;
