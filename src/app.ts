import express from "express";
import morgan from "morgan";
import cors from "cors";

import connectDB from "./dbConfig";

// connect to mongodb
connectDB();

// create express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

export default app;
