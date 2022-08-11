import { isValidApiKey } from "../apiKeyHandler.js";
import { randomCategorySelector, randomeOneReview } from "../randomSelector.js";
import { extractCountryName, nameRouter } from "../countryQueryHandler.js";
import { extractReviewName, reviewRouter } from "../reviewQUeryHandler.js";

const getOneRandomReview = async (req, res) => {
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
};

const getRandomReview = async (req, res) => {
  if (isValidApiKey(req.query.apiKey)) {
    let countryQuery = false;
    let reviewQuery = false;
    let reviewQty = 1;
    const reviewBody = [];
    if (req.query.qty) {
      if (req.query.qty > 10) return res.send("More calls than your limit");
      reviewQty = req.query.qty;
    }
    for (let i = 0; i < reviewQty; i++) {
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
      reviewBody.push({ rating: randomRating, review: review, author: author });
    }
    const data = {
      status: 200,
      success: true,
      body: reviewBody,
    };
    return res.send(data);
  }
  res.send("Invalid API Key");
};

export { getOneRandomReview, getRandomReview };
