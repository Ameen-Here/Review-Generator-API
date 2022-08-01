import europeanName from "./names.js";
import express from "express";
const app = express();

const PORT = 3000;

const DATA_SET = [
  {
    review: "The product was awesome",
  },
  {
    review: "The product was awesome",
  },
  {
    review: "The product was awesome",
  },
  {
    review: "The product was awesome",
  },
  {
    review: "The product was awesome",
  },
  {
    review: "The product was awesome",
  },
  {
    review: "The product was awesome",
  },
  {
    review: "The product was awesome",
  },
  {
    review: "The product was awesome",
  },
  {
    review: "The product was awesome",
  },
  {
    review: "The product was awesome",
  },
  {
    review: "The product was awesome",
  },
  {
    review: "The product was awesome",
  },
  {
    review: "The product was awesome",
  },
  {
    review: "The product was awesome",
  },
  {
    review: "The product was awesome",
  },
];

// Routing
app.get("/", async (req, res) => {
  //   const name = await axios.get(
  //     "https://api.parser.name/?api_key=ur_key&endpoint=generate"
  //   );
  //   console.log(name);
  //   const response = await name.data;
  //   console.log(response.data[0].name);
  if (req.query.endpoint) {
    const randomNum = Math.floor(Math.random() * 20);
    const data = DATA_SET[randomNum];
    const author = europeanName[randomNum];
    console.log(data);
    console.log(author);
    const sendingDara = { ...data, ...author };
    return res.send(sendingDara);
  }
  res.send("No endpoint");
});

app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
