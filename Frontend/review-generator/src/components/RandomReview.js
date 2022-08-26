import { Fragment } from "react";
import { useState } from "react";
import CodeShower from "./CodeShower";

const RandomReview = (props) => {
  const [showDemoResponse, setShowDemoResponse] = useState(false);

  const demoResonseHandler = () => {
    setShowDemoResponse((prevResponse) => !prevResponse);
  };
  return (
    <Fragment>
      <h3>Random Review</h3>
      <p>
        This endpoint returns a random review with a random name and random
        rating.
      </p>
      <div className={props.classes.card}>
        <div className={props.classes.cardHeader}>
          <div className={props.classes.url}>
            <p>
              <span className={props.classes.urlBadge}>GET</span> /v1/review
            </p>
          </div>
          <div className={props.classes.headerBtn}>
            <button onClick={demoResonseHandler}>
              {!showDemoResponse && "See Demo Response"}
              {showDemoResponse && "Hide Demo Response"}
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
                </div>

                <div>
                  &#123; <br />
                  &emsp;"status": 200,
                  <br /> &emsp;"success": true,
                  <br /> &emsp;"body":
                  <br />
                  &emsp; [ <br />
                  &emsp; &emsp;&#123;
                  <br /> &emsp; &emsp;&emsp;"rating": 4.5,
                  <br /> &emsp; &emsp;&emsp; "review": "I am so impressed with
                  this product!it never disappoints"
                  <br /> &emsp; &emsp;&emsp; "author": "Kris Bud"
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
                <th scope="col">Type</th>
                <th scope="col">Description</th>
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
            </tbody>
          </table>
          <p>
            Review Generator is a REST-API and accepts HTTP-requests through any
            programming language. The following example will get a random review
            with random names and random rating.
          </p>
          <CodeShower />
        </div>
      </div>
    </Fragment>
  );
};

export default RandomReview;
