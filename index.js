import express from "express";

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
