![bannerReviewGeberator](https://user-images.githubusercontent.com/86822695/187042309-f2ef6d2c-4626-4803-97d3-d17396b8d8be.png)
# Review Generator API 
![Stars](https://img.shields.io/ore/stars/stars)

Review Generator API generates random testimonials for your application. 1000's random of reviews with 1000's of unique names from different parts of the world 
and random rating system, all customisable by user. It solves the problem of creating random reviews for your mock/demo shopping website, product pages, etc.
All of the names and reviews are unique in each batch of output.

### Live Demo:
Documentation Page: https://reviewgenerator-16007.web.app/

API: https://lit-chamber-70662.herokuapp.com/v1/review?apiKey=6e97db3d-269c-4309-ad0a-72ffb83cc0d5 (Demo key)

Documentation page:

![reviewGeneratorDocumentationDemo](https://user-images.githubusercontent.com/86822695/187042661-eead0db3-7299-4457-b1d2-ee7407e1a98f.gif)

### Technologies Used

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="30"/> </a>  &emsp;   <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="30" height="30"/> </a>  &emsp;   <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="30" height="30"/> </a> 
 
## Features

- API limit update every 24 hours
- 1000's of unique names from different parts of the world (Whole customisable)
- 1000's of unique reviews
- Customising good, average, bad reviews
- Responsive and interactive documentation page.

## How To Use And Features Available
 
#### Get one random review

You can get one random review from a random country with random category.

API url:https://lit-chamber-70662.herokuapp.com/v1/review?apiKey=YOUR_API_KEY  (For your API key, visit documentation page.)

![randomReviewGif](https://user-images.githubusercontent.com/86822695/187043192-dd6c4bac-c544-49c3-a10a-46e8a5835587.gif)

#### Get multiple reviews using qty query

You can get multiple reviews using qty query, the limit applies to registered and non registered user, where registered user has 50 api calls every day. Non registered user has 25 calls.

API url:https://lit-chamber-70662.herokuapp.com/v1/reviews?apiKey=YOUR_API_KEY&qty=5 

![apiCallqtyDemo](https://user-images.githubusercontent.com/86822695/187043091-4ab33a9f-e321-4044-b293-5b87084b3a2f.gif)


#### Customise country names

You can customise the names of reviews for your specified countries. List of supported countries are given in documentation page.
These supported countries will get updated every now and then.

API url: https://lit-chamber-70662.herokuapp.com/v1/reviews?apiKey=YOUR_API_KEY&country=uS,gb

![apiDemoCountry](https://user-images.githubusercontent.com/86822695/187043417-28513cb0-d47e-4adc-badb-de7a9328cec0.gif)

#### Customise review category

You can customise the review categories to get specific reviews. The different categories available are "good", "avg" and "bad".

API url: https://lit-chamber-70662.herokuapp.com/v1/reviews?apiKey=YOUR_API_KEY&review=bad

![apiDemoReview](https://user-images.githubusercontent.com/86822695/187043575-399c884f-8b22-4cfb-a4c3-7148d867f6db.gif)

#### Customise mix match options

You can customise the reviews by adding qty, country and review queries in whatever way you need. You can get 10 bad reviews as well as several other options. By default, the quantity will be 1, names will be random and category will also be from random category.

API url: https://lit-chamber-70662.herokuapp.com/v1/reviews?apiKey=YOUR_API_KEY&review=bad,good&qty=5&country=jp,in

![apiDemoMix](https://user-images.githubusercontent.com/86822695/187043711-f60e6494-5c4c-4687-9d80-9c0c641c8892.gif)

## API Reference

#### Get one random review

```https://lit-chamber-70662.herokuapp.com
  GET /v1/review?apiKey=YOUR_API_KEY
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. Your API key |

#### Get random reviews with name, category and quantity options

```https://lit-chamber-70662.herokuapp.com
  GET v1/reviews?apiKey=YOUR_API_KEY&review=CATEGORY&qty=QUANTITY&country=COUNTRY_CODE
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `apiKey` | `string` | **Required**. Your API key |
| `qty` | `number` | **Optional**. To specify number of reviews |
| `country` | `string` | **Optional**. To specify country code for the author names |
| `review` | `string` | **Optional**. To specify the review category |

