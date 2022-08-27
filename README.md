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

API:
https://user-images.githubusercontent.com/86822695/187042758-0bf720d2-f4b2-4f46-8452-95f7d347af42.mp4

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

https://user-images.githubusercontent.com/86822695/187042901-61c4c4ff-97aa-483c-a92c-824fe6438ab8.mp4

#### Get multiple reviews using qty query

You can get multiple reviews using qty query, the limit applies to registered and non registered user, where registered user has 50 api calls every day. Non registered user has 25 calls.

API url:https://lit-chamber-70662.herokuapp.com/v1/reviews?apiKey=YOUR_API_KEY&qty=5 
![apiCallqtyDemo](https://user-images.githubusercontent.com/86822695/187043091-4ab33a9f-e321-4044-b293-5b87084b3a2f.gif)


#### Graphical representation

Users will get graphical representation using different charts. 
Pie chart: ALlocations of assets in your portfolio
Bar chart: Invested amount vs Current value

![graphical representation](https://user-images.githubusercontent.com/86822695/181798126-380f839f-f97b-46ca-a103-3527c2c8a0a6.gif)

## API Reference

#### Get company symbols of stocks

```https://financialmodelingprep.com
  GET /api/v3/search?query=${companyName}&limit=10&exchange=NASDAQ&apikey=${apiKey}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. Your API key |
| `companyName` | `string` | **Required**. Search company Name |

#### Get stock price of the stock.

```https://www.alphavantage.co
  GET /query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `apiKey` | `string` | **Required**. Your API key |
| `symbol` | `string` | **Required**. Search using company symbol |

