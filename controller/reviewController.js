import { isValidApiKey } from "../apiKeyHandler.js";
import { randomeOneReview } from "../randomSelector.js";
import randomReviewGenerator from "./randomReviewGenerator.js";

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
    let reviewQty = 1;
    const countryUser = req.query.country;
    const reviewUser = req.query.review;

    if (req.query.qty) {
      if (req.query.qty > 10) return res.send("More calls than your limit");
      reviewQty = req.query.qty;
    }
    const reviewBody = await randomReviewGenerator(
      reviewQty,
      countryUser,
      reviewUser
    );

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
