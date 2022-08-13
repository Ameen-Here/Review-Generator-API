import { extractCountryName, nameRouter } from "../countryQueryHandler.js";
import { extractReviewName, reviewRouter } from "../reviewQUeryHandler.js";
import { randomCategorySelector } from "../randomSelector.js";

const checkUniqueValues = (unqiueReview, uniqueAuthor, review, author) => {
  let unique = true;
  if (unqiueReview.indexOf(review) !== -1) {
    unique = false;
  }
  if (uniqueAuthor.indexOf(author) !== -1) {
    unique = false;
  }
  return unique;
};

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
    // To Check if review and authors are unique
    const unqiueReview = [];
    const uniqueAuthor = [];
    let counter = 0;

    while (counter < reviewQty) {
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

      if (!checkUniqueValues(uniqueAuthor, unqiueReview, review, author))
        continue; // Checking if the value is unique or not

      uniqueAuthor.push(author);
      unqiueReview.push(review);
      counter++;
      reviewBody.push({
        rating: randomRating,
        review: review,
        author: author,
      });
    }
    return reviewBody;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default randomReviewGenerator;
