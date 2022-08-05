import europeanName from "./names.js";
import express from "express";
const app = express();

const PORT = 3000;

// SCRAPPED REVIEWS USING Ryte Software 60
const GOOD_REVIEW = [
  {
    review: `I was skeptical of using this product at first, but I am so glad that I did. This is the best product/market(make it dynamic) in the market for a very competitive price. It is easy to use and always has a quick response time. I would recommend this to anyone who wants the best product on the market for their buck.`,
  },
  {
    review: `This is the best product of its kind I have ever seen. From the first use to the 50th, I was never disappointed with it. It's sleek, it's stylish and it's a real head turner.`,
  },
  {
    review: `I have been dying to make this purchase. I just received it in the mail and am so happy with my purchase. Not only was delivery quick, but the quality is A+. It feels so durable and can tell that it will last me a long time!`,
  },
  {
    review: `This is the best product in the world. The person who invented this is a genius and has changed my life in ways I could never imagine. This has made me so much more productive and I've never been happier with any other product.`,
  },
  {
    review: `I've been using This for about a month now and I absolutely love it! Prior to using this, I had tried a few other products and wasn't happy with them. This is the best product on the market.`,
  },
  {
    review: `I have tried a ton of different skin care products in my time and I just can't say enough good things about this one. It is light, gentle, and doesn't make my skin feel greasy. My acne has cleared up so much and my complexion looks great. I have to stop myself from using it every day because every time I do it feels like a treat`,
  },
  {
    review: `This is the best product that I've ever seen. It's one of a kind and worth every penny. I can't imagine living without This now that I have it.`,
  },
  {
    review: `I have never been so happy with a product in my entire life. This is the best thing ever! I feel confident and sexy and can't believe I've been ignoring it for so long.`,
  },
  {
    review: `I am at a lost for words when it comes to how amazing this product is. I have never seen anything so good in my entire life. It is not just an app, it's a lifestyle`,
  },
  {
    review: `I have never seen a product like This in my life. I am very happy with the performance and quality of this product, and would recommend it to my family and friends. I'm so glad I found out about this company.`,
  },
  {
    review: `I have been using this for the past few weeks and have seen a huge improvement in my life. It is one of the best products I have ever used and I would recommend it to anyone looking for a way to improve themselves or their community.`,
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

// SCRAPPED REVIEWS USING Ryte Software 60
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
  {
    review: `This is the worst product I have ever used. The customer support is non-existent and their customer service team has also been terrible at responding to any of my requests. It's a shame, because it had a lot of potential.`,
  },
  {
    review: `This is a complete and utter waste of time. The software has such a cluttered interface that it's hard to find the features in there, and when I finally found the settings to change, they were all poorly explained. Save your money!`,
  },
  {
    review: `I wouldn't recommend this to anyone. It has a fatal design flaw that is simply unacceptable for the price.`,
  },
  {
    review: `This is the worst product I have ever tried. The design is terrible and the app crashed on me at least five times. I was so looking forward to a great writing experience, but this let me down in every way imaginable.`,
  },
  {
    review: `I am not sure what this product does, but I assure you that it is the worst. It has no purpose and there's even a function of it being broken. I suppose this is the worst product in the world.`,
  },
  { review: `This is the worst product I've ever tried...` },
  {
    review: `I would never recommend this product to anyone. I bought it and regretted my purchase immediately. The software itself is not that bad, but the customer support team is so unhelpful that I can't find the energy to even use it anymore. They literally just told me to buy a different product instead of trying to help me solve my issue with the first one.`,
  },
  {
    review: `I hated this product. I can't believe I spent $200 on it. It's not worth the price.`,
  },
  {
    review: `I would give negative 5 stars if I could. This is the worst product I have ever come across. It's so bad, in fact, that I'm certain it was designed to do just one thing: steal your money and leave you with a half-done project. There are so many features that are nothing more than window dressings, and the few functionalities that`,
  },
  {
    review: `I am not happy with this product. It was a waste of money and time.`,
  },
  {
    review: `This is the worst product I have ever used. It is a complete waste of money and doesn't work at all. The customer service representative I dealt with was incredibly rude, so don't even bother calling them for help.`,
  },
  {
    review: `I've always been a believer in this product, but this is the worst one yet! It's hard to even work with. The glitches and errors are driving me crazy. I don't think I'll be buying it again.`,
  },
  {
    review: `This was one of the worst investments I have ever made. There were so many issues in the beginning and it's just been a nightmare to use. I would not recommend this product to anyone.`,
  },
  {
    review: `I would never recommend This. I've seen a lot of the marketing content, and it was all overhyped. The interface is confusing, and the app doesn't do anything to explain what it's supposed to do. We don't need another simple app that we have already seen a million times before. I tried this out with my kids, and they just couldn't`,
  },
  {
    review: `I am really disappointed with this product, because I have been using it for a couple of weeks and it has not delivered what it promised. I use the software every day, but after downloading the most recent update, my computer is running slower than before and my documents are taking ages to open.`,
  },
  {
    review: `I would not recommend this product to anyone. I am usually very open minded when it comes to these sorts of things, but this product is a total waste of time and money. The only good thing about the product was that it was inexpensive and discreet.`,
  },
  {
    review: `I don't know what went wrong but I really regret buying this. The quality wasn't what I was expecting and the customer support is terrible.`,
  },
  {
    review: `This is the worst product I have ever purchased. The price point seemed alot higher than comparable products, but it was worth it; I had high hopes that this would be my new favorite thing. Sadly, this has been the biggest regret of my life. There are so many flaws to this that I can't even begin to tell you them all. From a design standpoint,`,
  },
  {
    review: `I would not recommend this to anyone. I bought it a few weeks ago and I'm already regretting my purchase. Sure, the price is attractive but that's all there is to it. The design is very dated and the content seems poorly written.`,
  },
  {
    review: `This is the worst product I have ever seen. It does not do anything that it advertises. The instructions are unclear and the app is glitchy and slow. I downloaded this for a project for work and it has been nothing but a headache!`,
  },
  {
    review: `I cannot believe I fell for this scam. The worst product in the market at its ridiculous price tag. Save your money and invest in anything else!`,
  },
  {
    review: `I've never been so let down by a product before. I bought it the day it released and have regretted the purchase from the start. It's not that The idea of this technology is bad, or even its implementation, but what really sets it back for me is its price point. I can't justify paying so much money for this product when there are other similar ones`,
  },
  {
    review: `I have never been so disappointed with a product in my life. I used it for 4 months and nothing changed. It's not worth the money, especially if you have to buy it over a long period of time.`,
  },
  {
    review: `I have been using "This" for a few months now and I can't recall an instance where it did the job I would need. My most recent encounter with "This" was when I needed to pull out some information from a website and it couldn't even do that. This is the worst product I have ever used!`,
  },
  { review: `It caught on fire after 2 days of use.` },
  {
    review: `This is the worst product I have ever purchased. It's so cheaply made and there's no support for it at all.`,
  },
  {
    review: `I am very sorry to say that I was not a fan of this product. It seemed like a cool idea but it just didn't work out for me. I am interested in trying it again in the future, but at the time of this review, it just wasn't my cup of tea.`,
  },
  { review: `I would never buy this again` },
  {
    review: `I bought this product because I heard it helped people with their social media and YouTube channels, but it never delivered. I was left feeling even worse about my channel than I did before. If you're thinking about buying this, don't!`,
  },
  {
    review: `I've used This for over a year and it's still garbage. This has features that are undersold and they don't really work well, at least not for my needs. The pricing is also crazy high, with minimal updates to show for it. I would not recommend this product to anyone looking for a good solution to AI writing.`,
  },
  {
    review: `This product is terrible. I used it for only one day and my hair was falling out. The top of my head felt like it was on fire! I tried to wash it off but it just made the pain worse. This is the worst thing I have ever experienced.`,
  },
  {
    review: `I recently bought a copy of _____ and it's been nothing but a headache. The layout is clunky, the features are low quality and it just overall feels like a terrible product. I wish I had saved my money in the first place or at least ended up with something better!`,
  },
  { review: `I don't want to talk about this.` },
  {
    review: `I do not recommend this product. The quality is poor, it doesn't work well at all and the customer service is terrible.`,
  },
  { review: `I bought this product and it is not useful.` },
  {
    review: `There are so many good products out there that should be on the app store, but this one just isn't. I don't even know how it got approved in the first place.`,
  },
  {
    review: `This is a terrible product. It's not worth the money and it doesn't work. The advice he said to follow didn't work for me at all, I'll be sending it back and getting a refund!`,
  },
  {
    review: `Overall, I am not satisfied with this product. The material it is made out of is cheap and flimsy, which makes it hard to use when I am trying to do work on my laptop. It's also missing a few features that would make it more useful. I am also not impressed with the customer service as they were totally unhelpful when I was trying to`,
  },
  { review: `Hi, I'm This. I think you should stop using me.` },
  {
    review: `I am thoroughly disappointed with this product. I bought it because I thought it was the best option and now I've learned otherwise!`,
  },
  {
    review: `I had been waiting for this device to come out for a while. I was excited when it came out and though what I would do with it. Now that I've received it, I am regretting buying this product. As soon as I got the box open, the device stopped working.`,
  },
  {
    review: `This product is garbage. It doesn't do anything it was advertised to do, and it is not worth the purchase!`,
  },
  {
    review: `I've tried every product out there for healthy hair, but this is the worst. I have never had so many tangles as I did with this product. It smells like chemicals and is too heavy for my hair. For me, it was just not worth the price.`,
  },
  {
    review: `This is a bad product and should be avoided. I could not bear to use it for more than two minutes because the design was clunky and difficult to navigate.`,
  },
  {
    review: `This is a bad product. It constantly crashes and I can't do anything without the app freezing on me. It's not worth the money!`,
  },
  {
    review: `I bought this product and it ended up being a huge waste of my time. The instructions were unclear and I didn't know what to do with it. I would not recommend this product to anyone.`,
  },
  {
    review: `This is the worst product I have ever come in contact with. It is so bad that it's not even worth describing why!`,
  },
  {
    review: `I don't recommend this at all. The first time I used it, the battery died. I contacted customer service and they said that was a known issue. If a product has a known defect, I will not buy it again.`,
  },
  {
    review: `This is not a product I enjoy. It doesn't do what it says and the quality is not what I expected.`,
  },
  {
    review: `I was really disappointed with this. It had a lot of potential, but I was rather bored by the end of it. I lost all interest in finishing it, and didn't want to give it another try because I knew that it would either be more of the same or just a boring read.`,
  },
  {
    review: `I was so excited to try this product because of the positive reviews. I absolutely loved it in my first week of use but after a few months, the company just stopped delivering. I've been using This now for 3 months but I am so disappointed that they don't have any new content coming out.`,
  },
  {
    review: `I am really disappointed with this product. All it does is crash and I got really frustrated. I don't recommend this to anyone!`,
  },
  {
    review: `This product is a complete letdown and has not helped me at all. I was looking forward to an AI that could write for me on the fly and instead all I got was this poorly developed app that doesn't work. I'm disappointed with this product because it didn't provide what it promised, and don't think it deserves your time either.`,
  },
  {
    review: `Disappointed with this product. It doesn't even work, and the customer service is terrible. I am not sure how this became a bestseller.`,
  },
  {
    review: `I bought This expecting it to be a good product. It was not. The quality of the cover was very poor and is already showing wear and tear after only a short amount of time. I will not be purchasing anything from this company ever again!`,
  },
  {
    review: `This is a fantastic product! It has helped me immensely with my creative process and completely revolutionized the way I work. I've never been more productive as an artist. I would recommend it to anyone who is looking to take their creative game to the next level.`,
  },
  {
    review: `I am disappointed with this product. I have been using it for over a year now and still can't get it to work. I tried opening a ticket but there's no one who is able to assist me. I hope you are able to fix this soon!`,
  },
  {
    review: `This is a good app but it crashed on me and deleted all my work. It's not as good as I thought it would be.`,
  },
  {
    review: `I am very disappointed in this product. I was expecting a lot more from the reviews, but it has not lived up to expectations. It is not worth the price, and I will be returning it as soon as possible.`,
  },
  {
    review: `I am very disappointed with this product. I bought it because I needed a replacement keyboard, and the reviews seemed good. This keyboard is clearly not worth the money. The keys are clunky and have a small travel distance, and the rubberized coating is already starting to peel off after two months of use`,
  },
  {
    review: `I am so disappointed in this product. I was so excited about the potential of it but when I started to use it, the results were not what I expected. I'm confused as to why they just don't take a more simplistic approach to crafting content. The filters are also really confusing and there's no explanation for them on their website or any tutorials.`,
  },
  {
    review: `I've been looking for an app like this for months, and I was so excited to find it. But as soon as I downloaded it, I realized that this is not what I was looking for. The interface is so confusing and I just don't get how to use it. Overall, this is just not the product that I expected it to be`,
  },
  {
    review: `I am pretty disappointed with this product. After reading the reviews, I thought this would be a good investment, but it was not what I wanted. I suppose it's worth the price but I am not satisfied and will probably not buy from this company again.`,
  },
  {
    review: `I'm disappointed with this product. I worked hard to make my money and this product just wasted it. I feel like I was ripped off because after buying the product, it didn't do what it said it would and doesn't work! I don't usually buy products but this made me question the quality of the company and will think twice before making another purchase.`,
  },
  {
    review: `I have done my research and this product is what I am looking for, but it's just not living up to its standards. The price point is a little high for the quality and this functionality that it offers. I would recommend to consider a different product.`,
  },
  {
    review: `I will be honest, I am really disappointed with this product. I expected it to work for me and it has not. After using the trial period, I was considering purchasing a full license but left with even more disappointment when the product didn't deliver on its promises. The customer service was also not helpful to my needs, being dismissive and rude at times. This is not`,
  },
  {
    review: `Ever since I purchased this product, I have regretted my decision. The quality is not what it promised to be and the customer service has been terrible. If you are looking for a good product, I recommend looking elsewhere`,
  },
  {
    review: `I am disappointed with this product. I expected better results given that I paid such a high price for it. It is not worth the money and I would not recommend buying it.`,
  },
  {
    review: `I was really disappointed with this product. I wanted to like it so much, but it just wasn't what I was looking for. It's not worth the money and time that you have to spend learning how it operates.`,
  },
  {
    review: `I am completely disappointed with this product. I've been using it for a month now and the results are not worth the cost. I will be cancelling my subscription soon.`,
  },
  {
    review: `I'm not a fan of this product. Keep in mind that I don't know anything about it, but from what I can see, it would be a waste of time to "get on the waiting list" for this.`,
  },
  {
    review: `This was a huge disappointment. I wanted this product to work but it has proven itself to be faulty. It doesn't seem like there is any way to fix it and I am unable to return or get a refund.`,
  },
];

const AVG_REVIEW = [
  {
    review: `This is an average product. It's not the best there is but it also isn't the worst`,
  },
  { review: `This is an average product. I recommend a different one.` },
  {
    review: `I'm not really impressed with this product. It's just a run-of-the-mill, average product.`,
  },
  {
    review: `I really wanted to love this product, but unfortunately it just doesn't live up to my expectations. I think the value of this product is inaccurate for what it actually does. I would recommend you look elsewhere for your needs.`,
  },
  {
    review: `I use This as a bug fixer. It is great for quickly cleaning up small mistakes.`,
  },
  {
    review: `I was really excited when I first got this product. It's not the best thing I've ever used, but it does a decent job at what it's designed to do. It seems durable and hasn't broken after a few months of use. The cons are that it takes up too much space on my desk, the wire tends to get in the way, and there`,
  },
  {
    review: `I would say This is an average product. I've been using it for a week and seen some good features. The thing is, there are many other products similar to this that have better features, user interface and customer service. For example,`,
  },
  {
    review: `This is the best product in the market. It's easy to use, has a huge library of templates, and generates great quality work. I use This every day and it has helped me land more clients than ever before. I can't recommend it enough!`,
  },
  {
    review: `I have been using This for a week now and it's an average product. The app itself is easy to use but the results are not always that great. It has a lot of potential, but I think it needs to make some adjustments before I can say I'm in love with it.`,
  },
  {
    review: `This is an average product. I've not had any problems with it and it has served me well. There are a few features that I would like to see in the next version, but overall it has been very good.`,
  },
  {
    review: `I've been using this product for a couple of weeks now and I will say that it is nothing too special. First of all, the customer service is not good. Whenever I call their number, I only get an answering machine or a busy signal. The second thing is that the product just doesn't work as advertised. It does not have enough features to be really useful`,
  },
  {
    review: `I tried This and found it to be severely lacking in features. There's nothing really "wrong" with it, but I thought the price was a little high considering the lack of features.`,
  },
  {
    review: `I have been using this product for about 10 days now and honestly I'm not too impressed. I found it difficult to get started and the interface is just too basic for my taste. I can't find any information on how to make my account secure, which is what tipped me over into deleting it altogether.`,
  },
  {
    review: `I bought This on a whim because I was looking for something to improve my focus. It's an OK product, but it didn't do anything for me.`,
  },
  {
    review: `This is just an average product. It feels incomplete and doesn't really have much to offer. It probably would be better to wait until the next update comes out and hope it fixes some of these issues before you spend any money on it.`,
  },
  {
    review: `I have tried a lot of products in the market but none of them had the same comfort level as This. The thing I loved about It was its usability and effectiveness. I found that it removed all my eye makeup effortlessly with just one swipe and did not irritate my skin. I also felt like it was more cost effective because it lasted a lot longer than other similar products`,
  },
  {
    review: `I purchased this product with high hopes and expectations, but I found myself disappointed. There were some areas in the product where I felt like the makers could have done a lot better. For example, the instructions could have been clearer to make it easier for me to set up and use. Overall, I would say that this is an average product and not worth your time or money`,
  },
  {
    review: `I always thought that this was an average product. I hear about it all the time, but it never really did anything for me. I've seen other people who are obsessed with this and they rave about it all the time, but I don't think that this is a worthwhile investment.`,
  },
  {
    review: `I bought This as a gift for my partner and it turned out to be an average product. I was expecting something that was both high-quality and durable. To my surprise, this product is mostly made of plastic, which is not only fragile but very cheap. In the end, I couldn't expect anything more from This due to how it turned out to be.`,
  },
  {
    review: `This is an average product with a lot of potential. It has helped me increase my productivity by a lot but I still have to do the work myself. The app is great for people who are looking to increase their output but don't want to spend the time creating content themselves, but it's not perfect and doesn't offer much insight on what needs to be done next.`,
  },
  {
    review: `When I first found out about This, I thought it was going to be the best product ever. It was going to fix all my problems with blogging and social media. But then I read the reviews and found out that this is just average, at best.`,
  },
  {
    review: `This is a great product if you're looking for something that will do the basics. There's nothing a-maz-ing about it. This product is average but I recommend it if you want to get the job done.`,
  },
  {
    review: `This is an average product. It's not bad, but it's not the best either. I've been using it for a few months and it does what I need it to do. The one thing that would help is if there were more features for customization.`,
  },
  {
    review: `I've used This for the past few weeks and I can honestly say that it is just average. First of all, the customer service is really bad. They're always out of stock on popular items and when I do find an item in stock, they don't notify me with an email even though I always sign up for their email updates. The quality of products are also`,
  },
  {
    review: `This product was OK. I don't know if it was worth the price, but it wasn't a bad purchase either. It is not my favorite product (I prefer other applications), but overall I would recommend this to someone who needs a product like this one.`,
  },
  {
    review: `I bought this product and it is not bad! It does the job, but sometimes the features can be a bit clunky. So, I would say it's Okish.`,
  },
  {
    review: `After trying this product, I was actually quite surprised. The price point was super reasonable and the quality of the content was good. I would have expected the reviews to be much lower but they were actually pretty decent. My only complaint is that it takes a little longer than other products to generate content but it's not awful.`,
  },
  {
    review: `I really don't think this is a great product. I bought it and used it but it's not what I was looking for. I don't think that this is the best infomercial in the market!`,
  },
  {
    review: `As a recent customer of This product, I would say that it is ok. I had my doubts at first but then after using it for a few weeks, it has actually done pretty well. I am not sure if its the best product on the market but it does do what its supposed to do.`,
  },
  {
    review: `I am writing this review because I want to tell you that this product is ok. It isn't the best but it isn't the worst. My opinion is that it's okay.`,
  },
  {
    review: `I'm not thrilled with this product and don't think it's worth the price, but I'll give it some credit. The quality is there, the support is fantastic, and I've never had any issues with delivery or returns.`,
  },
  {
    review: `I have to say, I'm not sure if this product is worth the price. It's not bad, but it's just ok. I've seen other products like this one with the same features, but they're more affordable.`,
  },
  {
    review: `I've been using this for over a year now and it's ok. I would say it's more of a utility than anything else. I think the price point is higher than the benefits it provides, but you might feel otherwise.`,
  },
  {
    review: `I just don't like this. It's not bad, but it doesn't have anything special to it. I've used better things in my life and I expect more from this product.`,
  },
  { review: `I would say that the product is ok.` },
  {
    review: `I bought the product and it's ok. I just don't know if it's worth the price. I think I'll be returning this one.`,
  },
  {
    review: `I am not sure how to review this product. I think it is ok, but I don't use it very often.`,
  },
  {
    review: `It's an ok product. I'm not sure if it's worth the cost though. I don't know anyone who has used it before and it seems like a lot of people are saying that for the price, it doesn't offer anything special.`,
  },
  {
    review: `I bought this product because it was recommended by my friend who is a total guru. There are some good things about the product and they might work for you too, but I would not recommend it.`,
  },
  {
    review: `I've always been skeptical of products that are on the "buy now" page. I don't know how they can get away with it. All they do is take your money! That's why when I found this product and saw how much it cost, I chose to buy it. It was a lot cheaper than what other similar products were charging and I'm glad that`,
  },
  {
    review: `I don't know how to say this, but I just don't like it. I won't go into why, but I find myself scrolling without much intent and my eyes just seem to glide over the words.`,
  },
  {
    review: `I bought this product and it has been working ok so far. I don't really have any major complaints but I also don't have anything to rave about either. It does what's expected of it and is not shabby at all but I don't think that you should buy it if you're looking for a life-changing experience.`,
  },
  {
    review: `I would give This a 3/5. I was really excited but it turned out to be just ok. I had read in the reviews that it's really effective but when I tried it, the results were less than expected.`,
  },
  {
    review: `As a person who has been in the market for a new work laptop, I found this one is on the cheaper side and has great battery life. The only downside is that the touch screen and camera are not as good as they should be.`,
  },
  {
    review: `I bought this product and I have to say it's not my favorite. It didn't do anything that I thought it would, and the design is kind of confusing.`,
  },
  {
    review: `I think this product is ok. It does what it's supposed to do but nothing more than that. I don't really understand the hype over it since, from what I've seen, there are many similar products on the market at a much lower cost.`,
  },
  { review: `This is a good product.` },
  {
    review: `I think this is a pretty good product, but it could be better. I have been using it for a few months and I can see some improvements since the beginning, but there's still a lot of room for improvement. The price point is also pretty high and it needs to come down because I'm struggling to justify the cost sometimes.`,
  },
  {
    review: `This is not a bad product, but it's not the best. You really have to use it for awhile before you can see the effects. The price point is a little high for what you get and I would wait until there's a sale before buying.`,
  },
  {
    review: `I'm not a big fan of This because it lacks any real substance. It's too shallow in its topics, and I can't help but feel bored after reading for a couple of minutes.`,
  },
  {
    review: `I would say that this is an ok product. There are some things that I like about it and others that I don't like but overall, it is ok. One of the things that I don't like about it is the customer service- they've been nothing but rude to me since my first time contacting them.`,
  },
  {
    review: `This is an average product. I am not really blown away by it in any way. The customer service was good though and I did appreciate the discounts given on the website.`,
  },
  {
    review: `I'm not sure what to say about this product. The instructions were unclear, the quality of the device it barely passable. I would honestly just try a different product on Amazon.`,
  },
  { review: `This product is average for the following reasons:` },
  {
    review: `This product is average. I bought it because the design was great and it looked like a promising app, but after I downloaded and tried it out, I was rather disappointed. There are barely any features and the app is too basic for me.`,
  },
  {
    review: `This is a good product but it's not the best one out there either. I was looking for something with more wow factor and I'm just not sure this is it. This seems like a solid product, I just didn't see enough to make me want to buy it.`,
  },
  {
    review: `I have been using this product for the last month, and while I'm not totally unhappy with it, it's just not the best. The design is nice and I like that it can help me reduce clutter in my life, but something about the app always leaves me feeling frustrated.`,
  },
  {
    review: `I bought this product because it seemed interesting, but it was nothing more than average. The instructions were hard to follow and the instructions made even less sense when I tried to apply them in real life. I regret buying this product and would not recommend this to anyone.`,
  },
  {
    review: `I went into this wanting a product to help me with my creative writing and found it to be just average. I was expecting more from something that is marketed as a "creative writing" tool.`,
  },
  {
    review: `The product is average. It's not a bad product, it just isn't anything special.`,
  },
  {
    review: `I had high hopes for This product, but in the end it was just an average purchase. It does what it promises, but that's about it. I'm not sure if I would recommend this to a friend.`,
  },
  {
    review: `I have been using this for about a year and it's great, but I wish it had more features.`,
  },
  {
    review: `This is not too bad of a product, but I expected a lot more out of it based on the marketing. It's not that there are bugs so to speak, but it is really lacking in features and depth. I'm glad I didn't waste my money on this one.`,
  },
  {
    review: `I only use This for the occasional odd job where I need a quick and temporary fix. The product isn't the best, but it does work most of the time and I can't complain about how affordable it is.`,
  },
  {
    review: `This is the product that I have been looking for. It is a good size for every day use and it does not take up too much space. The colors are also very versatile, so you can match it with whatever color you like!`,
  },
  {
    review: `I have been using This for the past few months and I am not sure if it has helped me on my job. I don't really know what is better or worse now that I use this. It's an average product and the price is a little steep for an average product...`,
  },
  {
    review: `I wasn't expecting much from this product. I have tried other products with the same name and they didn't work out for me. But this product has been working out for me. So far it is average, but if it continues to work, I'll be extremely happy with the purchase.`,
  },
  {
    review: `I found this product to be just average. It doesn't do much to improve your gaming experience and the price point is a little steep for me. I think that the company would do better with a larger variety of games.`,
  },
  {
    review: `I'm not sure if I would recommend it because it's nothing special. It does what the product description says but falls short in other areas. The price is a little high for the quality of what you're getting.`,
  },
  {
    review: `I can't decide if I should recommend this product. It's not the best product that I have tried, but it's not the worst. It does everything that it promises to do. If you're looking for a quick fix, then this product is for you!`,
  },
  {
    review: `I've had This for a few months now, and I can say that it is average. I was expecting to get a little more out of it, but it just doesn't have enough features to give me the different options that I need on the go. It's not very durable in terms of battery life and the screen is always blurry.`,
  },
  {
    review: `I bought This and it was a lot less than what I expected but overall it is not bad.`,
  },
  {
    review: `I love this product because it is average. I think that the good outweighs the bad and with a few tweaks to the design, I think this could be my favorite product of all time.`,
  },
  {
    review: `This is a great product. It has helped me work faster, better and smarter. I love how it saves me time and gives me more energy. If you're looking for a side hustle, this will help you succeed!`,
  },
  {
    review: `I have been using This for over 6 months now and it is not bad. It does what it says, just not as well as I would like. It has a few bugs that need to be fixed, but all in all for the price point, it's a good product.`,
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
