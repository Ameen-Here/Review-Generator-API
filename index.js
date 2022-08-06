import europeanName from "./names.js";
import express from "express";
import GOOD_REVIEW from "./Resource/Reviews/goodReview.js";
import BAD_REVIEWS from "./Resource/Reviews/badReview.js";
import AVG_REVIEW from "./Resource/Reviews/avgReview.js";
const app = express();

const PORT = 3000;

// Routing
app.get("/", async (req, res) => {
  if (req.query.endpoint) {
    const randomNum = Math.floor(Math.random() * 20);
    const data = GOOD_REVIEW[randomNum];
    const author = europeanName[randomNum];
    console.log(data);
    console.log(author);
    const sendingDara = { ...data, ...author };
    return res.send(sendingDara);
  }
  res.send("No endpoint");
});

app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
