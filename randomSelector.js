import GOOD_REVIEW from "./Resource/Reviews/goodReview.js";
import BAD_REVIEWS from "./Resource/Reviews/badReview.js";
import AVG_REVIEW from "./Resource/Reviews/avgReview.js";
import arabNames from "./Resource/Names/arabNames.js";
import asianNames from "./Resource/Names/asianNames.js";
import indianNames from "./Resource/Names/indianNames.js";
import europeanNames from "./Resource/Names/europeanNames.js";

const randomCategorySelector = function () {
  const nameCollection = [arabNames, asianNames, europeanNames, indianNames];
  const reviewCollection = [GOOD_REVIEW, AVG_REVIEW, BAD_REVIEWS];
  const reviewRandomNum = Math.floor(Math.random() * 85);
  const reviewCategoryRandom = Math.floor(Math.random() * 3);
  const nameCategoryRandomPick = Math.floor(Math.random() * 4);
  const nameRandomNum = Math.floor(Math.random() * 200);
  const { review } = reviewCollection[reviewCategoryRandom][reviewRandomNum];
  const { author } = nameCollection[nameCategoryRandomPick][nameRandomNum];
  return {
    review,
    author,
    reviewCategoryRandom,
  };
};

const randomRatingSelector = function (reviewCategoryRandom) {
  if (reviewCategoryRandom === 0) return Math.floor(Math.random() * 2) + 4;
  else if (reviewCategoryRandom === 1) return Math.floor(Math.random() * 2) + 3;
  return Math.floor(Math.random() * 2) + 1;
};

export { randomCategorySelector, randomRatingSelector };
