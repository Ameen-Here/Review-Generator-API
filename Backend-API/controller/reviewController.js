import { isValidApiKey } from "../apiKeyHandler.js";
import { randomeOneReview } from "../randomSelector.js";
import { errorCreator, successCreator } from "./jsonResultGenerator.js";
import randomReviewGenerator from "./randomReviewGenerator.js";

const getOneRandomReview = async (req, res) => {
  try {
    // Only for random review with random category, random rating and random names. Nothing else.
    const { isApiKeyValid, noOfCalls } = await isValidApiKey(
      req.query.apiKey,
      1
    );
    if (!noOfCalls)
      return res.status(300).send(errorCreator("More calls than your limit"));
    if (isApiKeyValid) {
      const { review, author, randomRating } = randomeOneReview();

      const data = successCreator({
        rating: randomRating,
        review: review,
        author: author,
      });

      return res.json(data);
    }
    res.status(300).send(errorCreator("Invalid API Key"));
  } catch (err) {
    res.status(300).send(errorCreator(err.message));
  }
};

const getRandomReview = async (req, res) => {
  try {
    const reviewQty = req.query.qty ? req.query.qty : 1;
    const { isApiKeyValid, noOfCalls } = await isValidApiKey(
      req.query.apiKey,
      reviewQty
    );

    if (!noOfCalls)
      return res.status(300).send(errorCreator("More calls than your limit"));
    if (isApiKeyValid) {
      const countryUser = req.query.country;
      const reviewUser = req.query.review;

      const reviewBody = await randomReviewGenerator(
        reviewQty,
        countryUser,
        reviewUser
      );

      const data = successCreator(reviewBody);
      return res.status(200).send(data);
    }
    res.status(300).send(errorCreator("Invalid API Key"));
  } catch (err) {
    res.status(300).send(errorCreator(err.message));
  }
};

export { getOneRandomReview, getRandomReview };
