import express from "express";
import mongoose from "mongoose";

import "dotenv/config";

// Connect to mongoose
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/reviewGenerator";
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => console.log("Database Connected"));

const app = express();
import { router as randomReviewRouter } from "./routes/randomReviewRouter.js";
import { router as apiRouter } from "./routes/apiRouter.js";
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

// Routing
// Random review routes
app.use("/v1", randomReviewRouter);

app.use("/v1", apiRouter);

app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));

// Backend DOCS helper

// Backend ways to send country data
// 1.
// const country1 = "japan";
// const country2 = "china";
// const countryFull = `${country1},${country2}`;
// 2.
// const countries = ["japan", "china"];
// const countryFull = countries.toString();
