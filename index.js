import express from "express";

const app = express();
import {
  randomCategorySelector,
  randomRatingSelector,
} from "./randomSelector.js";

const PORT = 3000;

// Routing
app.get("/v1/reviews", async (req, res) => {
  if (req.query.apiKey) {
    const { review, author, reviewCategoryRandom } = randomCategorySelector();

    const randomRating = randomRatingSelector(reviewCategoryRandom);

    const data = {
      rating: randomRating,
      review,
      author,
    };

    return res.send(data);
  }
  res.send("No endpoint");
});

app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
