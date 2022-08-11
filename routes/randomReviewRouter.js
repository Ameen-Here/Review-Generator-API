import express from "express";
import {
  getOneRandomReview,
  getRandomReview,
} from "../controller/reviewController.js";
const router = express.Router();

router.route("/review").get(getOneRandomReview);

router.get("/reviews", getRandomReview);

export { router };
