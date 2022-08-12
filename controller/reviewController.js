import { isValidApiKey } from "../apiKeyHandler.js";
import { randomeOneReview } from "../randomSelector.js";
import { errorCreator, successCreator } from "./jsonResultGenerator.js";
import randomReviewGenerator from "./randomReviewGenerator.js";

const getOneRandomReview = async (req, res) => {
  // Only for random review with random category, random rating and random names. Nothing else.
  const { isApiKeyValid, noOfCalls } = await isValidApiKey(
    req.query.apiKey,
    req.query.qty
  );
  if (isApiKeyValid) {
    const { review, author, randomRating } = randomeOneReview();

    const data = successCreator({
      rating: randomRating,
      review: review,
      author: author,
    });

    return res.json(data);
  }
  res.send("No API");
};

const getRandomReview = async (req, res) => {
  try {
    const reviewQty = req.query.qty ? req.query.qty : 1;
    const { isApiKeyValid, noOfCalls } = await isValidApiKey(
      req.query.apiKey,
      reviewQty
    );

    if (!noOfCalls) return res.send(errorCreator("More calls than your limit"));
    if (isApiKeyValid) {
      const countryUser = req.query.country;
      const reviewUser = req.query.review;

      const reviewBody = await randomReviewGenerator(
        reviewQty,
        countryUser,
        reviewUser
      );

      const data = successCreator(reviewBody);
      return res.send(data);
    }
    res.send(errorCreator("Invalid API Key"));
  } catch (err) {
    res.send(errorCreator(err.message));
  }
};

export { getOneRandomReview, getRandomReview };
