import GOOD_REVIEW from "./Resource/Reviews/goodReview.js";
import AVG_REVIEW from "./Resource/Reviews/avgReview.js";
import BAD_REVIEWS from "./Resource/Reviews/badReview.js";

const reviewRouter = {
  good: GOOD_REVIEW,
  average: AVG_REVIEW,
  bad: BAD_REVIEWS,
};

const REVIEW_COLLECTION = [GOOD_REVIEW, AVG_REVIEW, BAD_REVIEWS];

const checkWrongReviewInput = (newString) => {
  const checkWrongInput = newString.filter(
    (string) => !reviewRouter[string.trim()]
  ); // Checking if given value is existes
  if (checkWrongInput.length > 0) return false;
  return true;
};

const extractReviewName = (queryReview) => {
  const tempString = queryReview.split(","); // Converted  array with comma seperated
  if (!checkWrongReviewInput(tempString)) return false;
  return tempString;
};

export { extractReviewName, reviewRouter, REVIEW_COLLECTION };
