import express from "express";

import completionController from "../controllers/completion.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import validateMiddleware from "../middlewares/validate.middleware.js";
import {
  completionSchema,
  getCompletionsSchema,
} from "../validations/completion.validation.js";

const router = express.Router();

router.use(authMiddleware);

router.post(
  "/",
  validateMiddleware(completionSchema),
  completionController.completeHabit,
);
router.delete(
  "/",
  validateMiddleware(completionSchema),
  completionController.uncompleteHabit,
);
router.get(
  "/",
  validateMiddleware(getCompletionsSchema, "query"),
  completionController.getCompletionsByDate,
);

export default router;
