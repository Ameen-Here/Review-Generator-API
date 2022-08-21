import { NAME_COLLECTION } from "./countryQueryHandler.js";
import { REVIEW_COLLECTION } from "./reviewQUeryHandler.js";
const NO_OF_REVIEWS = 85;
const NO_OF_NAMES = 200;

const reviewAuthorGenerator = function (nameCollection, reviewCollection) {
  // Getting Random Review
  const randomReviewCategory = Math.floor(
    Math.random() * reviewCollection.length
  );
  const randomReview = Math.floor(Math.random() * NO_OF_REVIEWS) + 3;
  const { review } = reviewCollection[randomReviewCategory][randomReview];

  // Getting Random author
  const randomNameCategory = Math.floor(Math.random() * nameCollection.length);
  const nameRandomNum = Math.floor(Math.random() * NO_OF_NAMES);
  const { author } = nameCollection[randomNameCategory][nameRandomNum];

  // Getting Random rating
  const randomRatingPicker = Math.floor(Math.random() * 3);
  const randomRating =
    reviewCollection[randomReviewCategory][randomRatingPicker];

  return {
    review,
    author,
    randomRating,
  };
};

const randomCategorySelector = function (names, review) {
  // Full name collection if name collection not given else given names collection
  let nameCollection = NAME_COLLECTION;
  if (names) nameCollection = names;

  // Full review collection if review collection not given else given review collection
  let reviewCollection = REVIEW_COLLECTION;
  if (review) reviewCollection = review;

  return reviewAuthorGenerator(nameCollection, reviewCollection);
};

const randomeOneReview = function () {
  return reviewAuthorGenerator(NAME_COLLECTION, REVIEW_COLLECTION);
};

export { randomCategorySelector, randomeOneReview };
