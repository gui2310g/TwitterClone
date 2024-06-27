import "dotenv/config"
import express from "express";
import cors from "cors";
import connectDB from "./src/api/database/db.js";
import router from "./src/api/routes/index.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(router)

export default app;