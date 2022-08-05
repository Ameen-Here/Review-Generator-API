import europeanName from "./names.js";
import express from "express";
const app = express();

const PORT = 3000;

// SCRAPPED REVIEWS USING Ryte Software 60
const GOOD_REVIEW = [
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
  {
    review: `I have been using this for a few weeks and I am very happy with it. It's so easy to put on, my face is always moisturized now, and it doesn't give me any breakouts which is a huge plus. I love how natural the product looks too, it doesn't make me look like a shiny mess. If you're looking for something safe`,
  },
  {
    review: `I was so impressed with how This solved my problem! It took me no time at all to find the perfect solution to my problem. I highly recommend this for anyone who needs a great product like This.`,
  },
  {
    review: `I love this product. It does exactly what it says it does. In fact, I use it more than I thought I would and couldn't be happier with the purchase.`,
  },
  {
    review: `I would recommend This to anyone that is looking for a new product. It's great at what it does and has a good price point. I am happy with my purchase of this product and would buy it again.`,
  },
  {
    review: `I love this product! I have used it for over a year and have loved every second of it.`,
  },
  {
    review: `I have been using This for a couple of months and I couldn't be happier. This is a great product that does what it says. It is more than worth the price for the quality of service provided. I will continue to use this product and would recommend it to anyone who cares about their business or themselves.`,
  },
  {
    review: `I was skeptical at first, but after using "This" for a couple of months I'm hooked. It has made my life so much easier and I can't imagine not having it in my life. If you are reading this, please just go buy it. You won't regret it!`,
  },
  {
    review: `I love this product. It's such a relief to have something I can engage in and isn't really like other things I've tried. This is the best thing since sliced bread!`,
  },
  {
    review: `I love this product! This is an incredible value for the price. It is beautiful, high quality and works well. I have been using it for a few months now and am really impressed with the quality. This can be used as a table, bench or even a sofa! The only downside is that I wish it came in more colors.`,
  },
  {
    review: `As a graphic designer, I was really looking for a product that would help me with my social media posts. This fits the bill perfectly! The interface is intuitive and the levels of customization are amazing. I highly recommend this to anyone looking for an app to help them with content creation!`,
  },
  {
    review: `I've been using this for the past 6 months and I can't imagine my life without it! It's helped me prioritize my work, improve my focus, and has made me a much more productive person. The customer support is also great. I had a few questions about how to use it and they were all answered really quickly. This is an amazing productivity tool and worth`,
  },
  {
    review: `I've been using This for a few weeks now and I am absolutely in love with it. It's the best thing on the market and you can't beat the price point. The support team is also fantastic- they always get back to me in less than 24 hours, which makes my life so much easier!`,
  },
  {
    review: `I am in love with this product. I'm a makeup artist and in the past, I had to spend countless hours researching new products, reading reviews, and trying them. With This, all I have to do is choose what I want and it does the work for me! It's like my own little assistant. The best part about it is that it creates a personalized`,
  },
  {
    review: `I've been looking for a product like this for months and it's great to finally find it. I'm always looking for something different and this is one of the best things I've found. The quality of the build is great and the sleek design looks amazing on my bookshelf. I'm really happy with this purchase!`,
  },
  {
    review: `This is a great product. I bought it 2 weeks ago and love it. It fits in my pocket easily, is fast, and has many good features.`,
  },
  {
    review: `I've been in the market for a new keyboard for a while, and This is by far the best one I've found. The design is sleek and minimalistic, but still feels like it can handle anything that I throw at it. And unlike other keyboards, This doesn't have any quirks or hidden bugs that make my typing experience less than perfect. I can't recommend`,
  },
  {
    review: `This is one of the best, easy to use and affordable webcam that I have ever tried. The pictures are crisp and clear, video quality is excellent on all the modes it offers, night vision mode is a great addition too. If you are looking for a reliable webcam this is the one for you!`,
  },
  {
    review: `I've been using this for a few weeks now and I can say that it's been the best of its kind on the market! I've had a lot of success with it and it's really helped me make my life easier. I highly recommend this to anyone looking for something similar.`,
  },
  {
    review: `This is a great product for the price. The shipping is fast and if there are any problems, customer service will help you out. I've never had any problem with this product, and it's been working really well for me so far.`,
  },
  {
    review: `I've been using this for a few months now and I have to say it's been great! I was really worried at first because of the price point, but it's totally worth it. There are a lot of other products on the market that offer a similar service and have a lower price but I'll tell you what, this is worth every penny.`,
  },
  {
    review: `This is the best product that I have ever used, it's so easy to use and saves me so much time.`,
  },
  {
    review: `I have been using this and it is amazing. I could not be more pleased with the product. I recommend you try it out!`,
  },
  {
    review: `I have been using this for a few months now and I couldn't be happier. It has helped me spend less time on mundane tasks, which in turn leaves more time to do the things I enjoy. This is the best!`,
  },
  {
    review: `I have always been left stumped when it comes to this kind of thing, but I am so happy I found This. It provides me with the guidance I need and is very user friendly. This has completely changed my life and how I see things in the world.`,
  },
  {
    review: `I love that I can use This to manage all my social media in one place. It's really convenient and has helped me increase my engagement by at least 50%.`,
  },
  {
    review: `This is the greatest product I have ever used. It's helped me get organized and make less mistakes in my work. I would recommend this to anyone!`,
  },
  {
    review: `I'm so glad I found this product. It is everything the company promised and more. After just a few days of use, I've already seen improvements in my skin and hair. No other product has done this for me in the past.`,
  },
  {
    review: `This is one of the best products I've seen in a long time. It's a must-have for people who want to stay on the cutting edge of technology.`,
  },
  {
    review: `I tried this out and it just changed my life. I am so grateful for this product because it changed my life. The only reason I would recommend this to someone is that personal experience that has done wonders for me!`,
  },
  {
    review: `I love this product! I have been using it for a week now and can tell a difference. My skin is smoother and softer than before. The smell is great too!`,
  },
  {
    review: `I have bought and used many products like this one. I can tell you, without hesitation, that This is BY FAR the best one. The design is flawless and has so many uses for your life. I use it for everything from cooking to cleaning and It never disappoints me. I can't recommend This enough!`,
  },
  {
    review: `I absolutely love this product. It is one of the best things I have ever used, and it has made my life so much easier. I don't know what I would do without it. This is a must-have for anyone who wants to get their work done quickly and efficiently!`,
  },
  {
    review: `I used This for my entire project and I am so happy with the result. It helped me organize and plan my thoughts without all the pressure of trying to figure out how to write a story. It was incredible!`,
  },
  {
    review: `I am so glad I found This. It is perfect for my needs and I love that it does everything I need it to do. The design and features are really cool, too. This is the best product of its type on the market and I'm thrilled to have found it so quickly, thank you!`,
  },
  {
    review: `I've been using this product for the past two months and I couldn't be happier. It has made a huge difference in my life - it's so easy to use, lightweight and has improved my productivity. I just wish I had found it sooner!`,
  },
  {
    review: `I cannot believe how well this product works. I have been using it for a couple of days now and it's really helped me with my focus. It's one of the few things that I use on my computer and phone every day, which is saying something! The company is also great, their customer service reps are always very helpful when I need them.`,
  },
  {
    review: `I have never been happier with a product than I am with this. The design is brilliant and it's easy to use. Even my 5-year-old can work it with ease. I've been looking for something like this for years and now that I finally found it, I'll never be without it again. This is an incredible product!`,
  },
  {
    review: ` I love This. Not only does it work better than any other compulsive tracking app on the market, it also actually helps me control my life (something that has been hard for me to do). A lot of people think that compulsive tracking is all about numbers, but the truth is, numbers don't tell you`,
  },
  {
    review: `This is the most intuitive and comprehensive digital marketing course out there. I have taken a few courses in this field, but this one is by far my favorite. It tells you the step-by-step process of how to get marketing done, with all the most recent technologies and practices. I've been applying what I've learned from this course in just a few days,`,
  },
  {
    review: `I have never seen anything like this! It's so amazing and I am so excited to share it with all of my friends. This is a product that EVERYONE should own!`,
  },
  {
    review: `This product is amazing. I use it all the time and it's changed my life for the better.`,
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
