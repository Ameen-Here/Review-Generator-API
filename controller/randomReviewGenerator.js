import { extractCountryName, nameRouter } from "../countryQueryHandler.js";
import { extractReviewName, reviewRouter } from "../reviewQUeryHandler.js";
import { randomCategorySelector } from "../randomSelector.js";

// Generate collection of review according to options
const randomReviewGenerator = async (
  reviewQty,
  userQueryCountry,
  userQueryReview
) => {
  let countryQuery = false;
  let reviewQuery = false;
  const reviewBody = [];
  for (let i = 0; i < reviewQty; i++) {
    if (userQueryCountry) {
      countryQuery = extractCountryName(userQueryCountry);
      if (!countryQuery) return res.send("Wrong Inputs"); // Checking if input is wrong or not
      countryQuery = countryQuery.map((string) => nameRouter[string.trim()]);
    }
    if (userQueryReview) {
      reviewQuery = extractReviewName(userQueryReview);
      if (!reviewQuery) return res.send("Wrong Inputs"); // Checking if input is wrong or not
      reviewQuery = reviewQuery.map((string) => reviewRouter[string.trim()]);
    }
    const { review, author, randomRating } = randomCategorySelector(
      countryQuery,
      reviewQuery
    );
    reviewBody.push({ rating: randomRating, review: review, author: author });
  }
  return reviewBody;
};

export default randomReviewGenerator;
