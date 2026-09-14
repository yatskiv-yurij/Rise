import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import habitRoutes from "./routes/habit.routes.js";
import completionRoutes from "./routes/completion.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";

import statisticsRoutes from "./routes/statistics.routes.js";
import settingsRoutes from "./routes/settings.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);
app.use("/api/completions", completionRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/statistics", statisticsRoutes);
app.use("/api/settings", settingsRoutes);

export default app;
