import dotenv from "dotenv";
import "express-async-errors";

import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import MQTTService from "./mqtt/mqttService.js";

// middleware
import notFoundHandler from "./middlewares/notFound-handler.js";
import errorHandler from "./middlewares/error-handler.js";
import { authenticateUser } from "./middlewares/authMiddleware.js";

// routers
import { accountRoutes,authRoutes,companyRoutes,devicesRoutes } from "./routes/index.js";

import { dirname } from 'path'
import path from 'path'
import {fileURLToPath} from 'url'
import { getCompanies } from "./controllers/companyController.js";
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

MQTTService.connect()

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.resolve(__dirname, './client/dist')))

app.use(morgan("dev"));

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/account", authenticateUser, accountRoutes);
app.use("/api/v1/devices", authenticateUser, devicesRoutes);
app.get("/api/v1/company", getCompanies)
app.use("/api/v1/company", authenticateUser, companyRoutes);

// UI
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'))
})

app.use(notFoundHandler);
app.use(errorHandler);

try {
  await mongoose.connect(process.env.MONGO_DB_URL);
  app.listen(port, () => console.log(`server is running on port ${port}`));
} catch (error) {
  console.log(error);
  process.exit(1);
}
