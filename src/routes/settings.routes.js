import express from "express";

import settingsController from "../controllers/settings.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.middleware.js";

import updateSettingsSchema from "../validations/settings.validation.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", settingsController.getSettings);

router.patch(
  "/",
  validate(updateSettingsSchema),
  settingsController.updateSettings,
);

export default router;
