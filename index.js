import express from "express";

const app = express();
import { randomCategorySelector } from "./randomSelector.js";
import extractCountryName from "./countryQueryHandler.js";
const PORT = 3000;

// Routing
app.get("/v1/reviews", async (req, res) => {
  if (req.query.apiKey) {
    let countryQuery = false;
    if (req.query.country) {
      countryQuery = extractCountryName(req.query.country);
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
  res.send("No endpoint");
});

app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
