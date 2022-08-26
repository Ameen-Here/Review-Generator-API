import { useState } from "react";
import CodeShower from "./CodeShower";
import classes from "./MainContent.module.css";

const MainContent = () => {
  const [showDemoResponse, setShowDemoResponse] = useState(false);

  const demoResonseHandler = () => {
    setShowDemoResponse((prevResponse) => !prevResponse);
  };

  return (
    <div className={classes.mainContent}>
      <h2>Documentation</h2>
      <div role="alert" className={`${classes.alert} ${classes.alertWarning}`}>
        <b className={classes.bold}>Pro Tip</b>: Get your free Api key{" "}
        <a href="#">here</a> and all code snippets below will contain your
        private Api key. <a href="#">Register</a> with your email to increase
        your daily limit and all code snippets below will contain your private
        registered Api key.
      </div>
      <h3>Daily Limits</h3>
      <p>
        Free API Keys will have a daily limit of 25 reviews. You can upgrade to
        registered API key with your email to increase your daily limit to 50
        reviews. You are only charged for successfully returned reviews. All
        other features are available to both free and registered user.
        <br />
        <b className={classes.lightBold}>Happy Coding!!!</b>
      </p>

      <h3>Random Review</h3>
      <p>
        This endpoint returns a random review with a random name and random
        rating.
      </p>
      <div className={classes.card}>
        <div className={classes.cardHeader}>
          <div className={classes.url}>
            <p>
              <span className={classes.urlBadge}>GET</span> /v1/review
            </p>
          </div>
          <div className={classes.headerBtn}>
            <button onClick={demoResonseHandler}>
              {!showDemoResponse && "See Demo Response"}{" "}
              {showDemoResponse && "Hide Demo Response"}{" "}
            </button>
          </div>
        </div>
        <div className={classes.cardContent}>
          {showDemoResponse && (
            <div
              role="alert"
              className={`${classes.alert} ${classes.alertInfo}`}
            >
              <div className={classes.codeExample}>
                <div>
                  <b className={classes.bold}>Success Example</b>:
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

          <table className={classes.table}>
            <thead>
              <tr>
                <th scope="col" className={classes.pl0}>
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

      <h3>Supported platform</h3>
      <p>
        This endpoint returns reviews from a review profile url. Please keep in
        mind that this live endpoint is only supposed to be used for small date
        ranges and small review amounts. Please use our asynchronous batch
        endpoint for any larger scaled projects.
      </p>
    </div>
  );
};

export default MainContent;
