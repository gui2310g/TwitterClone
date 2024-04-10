import express from "express";
import connectDB from "./src/api/database/db.js";
import dotenv from "dotenv";

import userRoute from "./src/api/routes/user.route.js";
import authRoute from "./src/api/routes/auth.route.js";
import TweetsRoute from "./src/api/routes/Tweets.route.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

connectDB();

app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/Tweets", TweetsRoute);

app.listen(port, () => console.log(`Server running on port: ${port}`));
