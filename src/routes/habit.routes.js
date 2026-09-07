import express from "express";
import {
  createHabit,
  getHabbits,
  getHabitById,
  updateHabit,
  deleteHabit,
} from "../controllers/habit.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";
import validateMiddleware from "../middlewares/validate.middleware.js";
import {
  createHabitSchema,
  updateHabitSchema,
} from "../validations/habit.validation.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", validateMiddleware(createHabitSchema), createHabit);
router.get("/", getHabbits);
router.get("/:id", getHabitById);
router.patch("/:id", validateMiddleware(updateHabitSchema), updateHabit);
router.delete("/:id", deleteHabit);

export default router;
