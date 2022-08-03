import europeanName from "./names.js";
import express from "express";
const app = express();

const PORT = 3000;

// SCRAPPED REVIEWS USING Ryte Software
const DATA_SET = [
  {
    review:
      "I was skeptical of using this product at first, but I am so glad that I did. This is the best product/market(make it dynamic) in the market for a very competitive price. It is easy to use and always has a quick response time. I would recommend this to anyone who wants the best product on the market for their buck.",
  },
  {
    review:
      "This is the best product of its kind I have ever seen. From the first use to the 50th, I was never disappointed with it. It's sleek, it's stylish and it's a real head turner.",
  },
  {
    review:
      "I have been dying to make this purchase. I just received it in the mail and am so happy with my purchase. Not only was delivery quick, but the quality is A+. It feels so durable and can tell that it will last me a long time!",
  },
  {
    review:
      "This is the best product in the world. The person who invented this is a genius and has changed my life in ways I could never imagine. This has made me so much more productive and I've never been happier with any other product.",
  },
  {
    review:
      "I've been using This for about a month now and I absolutely love it! Prior to using this, I had tried a few other products and wasn't happy with them. This is the best product on the market.",
  },
  {
    review:
      "I have tried a ton of different skin care products in my time and I just can't say enough good things about this one. It is light, gentle, and doesn't make my skin feel greasy. My acne has cleared up so much and my complexion looks great. I have to stop myself from using it every day because every time I do it feels like a treat",
  },
  {
    review:
      "This is the best product that I've ever seen. It's one of a kind and worth every penny. I can't imagine living without This now that I have it.",
  },
  {
    review:
      "I have never been so happy with a product in my entire life. This is the best thing ever! I feel confident and sexy and can't believe I've been ignoring it for so long.",
  },
  {
    review:
      "I am at a lost for words when it comes to how amazing this product is. I have never seen anything so good in my entire life. It is not just an app, it's a lifestyle.",
  },
  {
    review:
      "I have never seen a product like This in my life. I am very happy with the performance and quality of this product, and would recommend it to my family and friends. I'm so glad I found out about this company.",
  },
  {
    review:
      "I have been using this for the past few weeks and have seen a huge improvement in my life. It is one of the best products I have ever used and I would recommend it to anyone looking for a way to improve themselves or their community.",
  },
  {
    review: `I bought this product and I'm never going back. It's the best product.`,
  },
  {
    review: `I'm not one to write reviews often, but I had to take the time to share how awesome this product is. I bought it because my friend recommended it and it has saved me a ton of time. The features are awesome and keep me from having to edit photos all day long like I used to.`,
  },
  {
    review: `This is the best product I have ever used! It has simplified my life so much and made things so much easier. My daily routine is so much more enjoyable now that this product exists. This is the best thing I've seen on the market.`,
  },
  {
    review: `I have never been so happy with anything I have ever bought in my life. This is the best product I have ever invested in.`,
  },
  {
    review: `Thank you for this product. Without it I would be so lost right now. It was a lifesaver to find something like this! I'm telling everyone about it!`,
  },
];

// SCRAPPED REVIEWS USING Ryte Software
const BAD_REVIEWS = [
  {
    review: `I do not recommend this product. I was really excited to get this and then when it came in, I had some troubles with it. The first thing that didn't work was the app itself. It would crash every time I would open it up. When I could finally get past that, the content that it generated was terrible! It wasn't generating any quality whatsoever.`,
  },
  {
    review: `I can't believe I wasted my money on this. It's not as easy as the brochure and it seems to just be more trouble than it is worth. The customer service for this company is awful, too!`,
  },
  {
    review: `This is the worst product I have ever purchased. The moment I unpacked it, it started to malfunction and caught on fire. It was a miracle that there were no casualties, but the damage caused by this product will never be undone.`,
  },
  {
    review: `I've always been skeptical of This and I don't think it's worth the purchase. It is a good concept, but it just doesn't work. Not worth your time/effort, if you ask me.`,
  },
  {
    review: `I bought this and it was so bad. It didn't do anything I expected and I wouldn't recommend it to anyone.`,
  },
  {
    review: `I'm not even sure why this product exists. It's by far one of the most useless products I've ever seen. I can't even begin to tell you all the problems with it, you'll have to see for yourself.`,
  },
  {
    review: `This product is a complete waste of money. I am very disappointed in the customer service I received with this company and would not recommend it to anyone.`,
  },
  {
    review: `I don't usually write reviews, but I felt like I had to with this product. It's absolutely terrible and should not have been allowed in the market.`,
  },
  {
    review: `I don't know if I got a faulty product or what, but I am really disappointed with this product right now. The first thing that struck me was how heavy and clunky it seemed. The weight of the printer is truly shocking. It's like they are trying to make it as heavy as possible in order to feel more expensive and robust - which is ridiculous because it`,
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
