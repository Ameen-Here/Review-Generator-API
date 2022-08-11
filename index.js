import express from "express";

const app = express();
import { randomCategorySelector, randomeOneReview } from "./randomSelector.js";
import { extractCountryName, nameRouter } from "./countryQueryHandler.js";
import { extractReviewName, reviewRouter } from "./reviewQUeryHandler.js";
import { isValidApiKey } from "./apiKeyHandler.js";
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

// Routing
app.get("/v1/review", async (req, res) => {
  // Only for random review with random category, random rating and random names. Nothing else.
  if (isValidApiKey(req.query.apiKey)) {
    const { review, author, randomRating } = randomeOneReview();

    const data = {
      status: 200,
      success: true,
      body: { rating: randomRating, review: review, author: author },
    };

    return res.json(data);
  }
  res.send("No API");
});

app.get("/v1/reviews", async (req, res) => {
  if (isValidApiKey(req.query.apiKey)) {
    let countryQuery = false;
    let reviewQuery = false;
    if (req.query.country) {
      countryQuery = extractCountryName(req.query.country);
      if (!countryQuery) return res.send("Wrong Inputs"); // Checking if input is wrong or not
      countryQuery = countryQuery.map((string) => nameRouter[string.trim()]);
    }
    if (req.query.review) {
      reviewQuery = extractReviewName(req.query.review);
      if (!reviewQuery) return res.send("Wrong Inputs"); // Checking if input is wrong or not
      reviewQuery = reviewQuery.map((string) => reviewRouter[string.trim()]);
    }
    const { review, author, randomRating } = randomCategorySelector(
      countryQuery,
      reviewQuery
    );

    console.log(author);

    const data = {
      status: 200,
      success: true,
      body: { rating: randomRating, review: review, author: author },
    };

    console.log(data);

    return res.send(data);
  }
  res.send("Invalid API Key");
});

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
