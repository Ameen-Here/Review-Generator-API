import express from "express";

const app = express();
import { randomCategorySelector } from "./randomSelector.js";
import { extractCountryName, nameRouter } from "./countryQueryHandler.js";
import { isValidApiKey } from "./apiKeyHandler.js";
const PORT = 3000;

// Routing
app.get("/v1/review", async (req, res) => {
  // Only for random review with random category, random rating and random names. Nothing else.
  if (isValidApiKey(req.query.apiKey)) {
    const { review, author, randomRating } = randomCategorySelector();

    const data = {
      rating: randomRating,
      review,
      author,
    };

    return res.send(data);
  }
  res.send("No API");
});

app.get("/v1/reviews", async (req, res) => {
  if (isValidApiKey(req.query.apiKey)) {
    let countryQuery = false;
    if (req.query.country) {
      countryQuery = extractCountryName(req.query.country);
      // Backend ways to send country data
      // 1.
      // const country1 = "japan";
      // const country2 = "china";
      // const countryFull = `${country1},${country2}`;
      // 2.
      // const countries = ["japan", "china"];
      // const countryFull = countries.toString();
      if (!countryQuery) return res.send("Wrong Inputs"); // Checking if input is wrong or not

      countryQuery = countryQuery.map((string) => nameRouter[string.trim()]);
    }
    const { review, author, randomRating } =
      randomCategorySelector(countryQuery);

    const data = {
      rating: randomRating,
      review,
      author,
    };

    return res.send(data);
  }
  res.send("Invalid API Key");
});

app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
