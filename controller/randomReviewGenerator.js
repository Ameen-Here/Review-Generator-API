import { extractCountryName, nameRouter } from "../countryQueryHandler.js";
import { extractReviewName, reviewRouter } from "../reviewQUeryHandler.js";
import { randomCategorySelector } from "../randomSelector.js";

// Generate collection of review according to options
const randomReviewGenerator = async (
  reviewQty,
  userQueryCountry,
  userQueryReview
) => {
  try {
    let countryQuery = false;
    let reviewQuery = false;
    const reviewBody = [];
    for (let i = 0; i < reviewQty; i++) {
      if (userQueryCountry) {
        countryQuery = extractCountryName(userQueryCountry);
        if (!countryQuery) throw new Error("Wrong Country Inputs"); // Checking if input is wrong or not
        countryQuery = countryQuery.map((string) => nameRouter[string.trim()]);
      }
      if (userQueryReview) {
        reviewQuery = extractReviewName(userQueryReview);
        if (!reviewQuery) throw new Error("Wrong Query Inputs"); // Checking if input is wrong or not
        reviewQuery = reviewQuery.map((string) => reviewRouter[string.trim()]);
      }
      const { review, author, randomRating } = randomCategorySelector(
        countryQuery,
        reviewQuery
      );
      reviewBody.push({ rating: randomRating, review: review, author: author });
    }
    return reviewBody;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default randomReviewGenerator;
