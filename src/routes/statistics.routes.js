import express from "express";

import statisticsController from "../controllers/statistics.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.middleware.js";

import statisticsSchema from "../validations/statistics.validation.js";

const router = express.Router();

router.use(authMiddleware);

router.get(
  "/",
  validate(statisticsSchema, "query"),
  statisticsController.getStats,
);

export default router;
