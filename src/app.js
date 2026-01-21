import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Auth system API running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// ❗ error handler LAST
app.use(errorHandler);

export default app;
