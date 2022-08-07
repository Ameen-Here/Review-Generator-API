// SCRAPPED REVIEWS USING Ryte Software 85
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
  {
    review: `I lost all faith in humanity when I stumbled upon this. There is no point. It's a waste of money.`,
  }, ///
  {
    review: `This is not worth the money. The software never worked and I was never able to get a refund.`,
  },
  {
    review: `I regret buying this. I feel like all it does is waste my time, and for the price, it's not worth the hassle. I wish there was a way to get my money back...`,
  },
  {
    review: `I was so excited when I first got this. But I should have known better--the thing only works half the time and it is a total waste of money. The other day when I plugged it in, all it did was show me the same old error message that says "please try again later." What a joke!`,
  },
];

export default BAD_REVIEWS;
