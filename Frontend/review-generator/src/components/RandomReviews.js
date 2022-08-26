import { Fragment } from "react";
import { useState } from "react";
import SecondCodeShower from "./SecondCodeShower";

const RandomReviews = (props) => {
  const [showDemoResponse, setShowDemoResponse] = useState(false);

  const demoResonseHandler = () => {
    setShowDemoResponse((prevResponse) => !prevResponse);
  };
  return (
    <Fragment>
      <h3>Random Reviews with optional (Names/Rating/Quantity)</h3>
      <p>
        This endpoint returns a random review with optional random name from
        list of supporting <a href="#">countries</a>, optioanl rating
        (Good/Average/Bad) and optional quanity whose limits are determined by
        the user category.
      </p>
      <div className={props.classes.card}>
        <div className={props.classes.cardHeader}>
          <div className={props.classes.url}>
            <p>
              <span className={props.classes.urlBadge}>GET</span> /v1/reviews
            </p>
          </div>
          <div className={props.classes.headerBtn}>
            <button onClick={demoResonseHandler}>
              {!showDemoResponse && "See Demo Response"}{" "}
              {showDemoResponse && "Hide Demo Response"}{" "}
            </button>
          </div>
        </div>
        <div className={props.classes.cardContent}>
          {showDemoResponse && (
            <div
              role="alert"
              className={`${props.classes.alert} ${props.classes.alertInfo}`}
            >
              <div className={props.classes.codeExample}>
                <div>
                  <b className={props.classes.bold}>Success Example</b>:
                  <p>
                    URL: /v1/reviews?apiKey=API_KEY&qty=5& <br />
                    country=us,uk &review=good,bad
                  </p>
                </div>

                <div>
                  &#123; <br />
                  &emsp;"status": 200,
                  <br /> &emsp;"success": true,
                  <br /> &emsp;"body":
                  <br />
                  &emsp; [ <br />
                  &emsp; &emsp;&#123;
                  <br /> &emsp; &emsp;&emsp;"rating": 5,
                  <br /> &emsp; &emsp;&emsp; "review": "I've been using the for
                  about a month now and I absolutely love it!"
                  <br /> &emsp; &emsp;&emsp; "author": "Yvonne Greenland"
                  <br />
                  &emsp;&emsp; &#125;,
                  <br />
                  &emsp; &emsp;&#123;
                  <br /> &emsp; &emsp;&emsp;"rating": 4.5,
                  <br /> &emsp; &emsp;&emsp; "review": "This is a really awesome
                  product that I find myself using all the time."
                  <br /> &emsp; &emsp;&emsp; "author": "Brady Harte"
                  <br />
                  &emsp;&emsp; &#125;,
                  <br />
                  &emsp; &emsp;&#123;
                  <br /> &emsp; &emsp;&emsp;"rating": 1.5,
                  <br /> &emsp; &emsp;&emsp; "review": "The quality of the cover
                  was very poor,it is already showing tear"
                  <br /> &emsp; &emsp;&emsp; "author": "Luisa Padula"
                  <br />
                  &emsp;&emsp; &#125;,
                  <br />
                  &emsp; ] <br />
                  &#125;
                </div>
              </div>
            </div>
          )}
          <p>The review creation endpoint accepts the following parameters:</p>

          <table className={props.classes.table}>
            <thead>
              <tr>
                <th scope="col" className={props.classes.pl0}>
                  Parameter
                </th>
                <th scope="col">Type</th> <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <code>url</code>
                </th>
                <td>
                  <b>required</b>,<br />
                  string
                </td>
                <td>The target URL</td>
              </tr>
              <tr>
                <th scope="row">
                  <code>apiKey</code>
                </th>
                <td>
                  <b>required</b>,<br />
                  string
                </td>
                <td>Users API Key to access the API.</td>
              </tr>
              <tr>
                <th scope="row" class="bt-0">
                  <code class="highlighter-rouge">qty</code>
                </th>{" "}
                <td>
                  <b>optional</b>,<br /> integer
                </td>{" "}
                <td>
                  Amount of reviews you want to retrieve. (Limit depends on user
                  category)
                </td>
              </tr>{" "}
              <tr>
                <th scope="row" class="bt-0">
                  <code class="highlighter-rouge">country</code>
                </th>{" "}
                <td>
                  <b>optional</b>, string
                </td>{" "}
                <td>
                  Format: 'country1,country2,...', gets reviews with author
                  names from these countries. Check <a href="#">Country</a>{" "}
                  section to check for supported countries.{" "}
                </td>
              </tr>{" "}
              <tr>
                <th scope="row" class="bt-0">
                  <code class="highlighter-rouge">review</code>
                </th>{" "}
                <td>
                  <b>optional</b>,<br /> string
                </td>{" "}
                <td>
                  To specify review category. Available categories are good,
                  avg, bad.{" "}
                </td>
              </tr>{" "}
            </tbody>
          </table>
          <p>
            Review Generator is a REST-API and accepts HTTP-requests through any
            programming language. The following example will get a random review
            with 10 reviews, with names from USA, UK and only good category of
            rating.
          </p>
          <SecondCodeShower />
        </div>
      </div>
    </Fragment>
  );
};

export default RandomReviews;
