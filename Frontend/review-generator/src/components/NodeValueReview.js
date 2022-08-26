import classes from "./CodeShower.module.css";

const NodeValueReview = () => {
  return (
    <div>
      <span className={classes.violetString}>var</span> request ={" "}
      <span className={classes.greenString}>require</span> (
      <span className={classes.yellowString}>'request'</span>);
      <br />
      <br />
      <span className={classes.violetString}>var</span> options = &#123;
      <br />
      &emsp; <span className={classes.cyanString}>url:</span>
      <span className={classes.yellowString}>
        https://lit-chamber-70662.herokuapp.com/v1/review?apiKey=6e97db3d-269c-4309-ad0a-72ffb83cc0d5'
      </span>
      <br />
      &#125;;
      <br />
      <br />
      <span className={classes.violetString}>function</span>{" "}
      <span className={classes.yellowString}>callback</span>(
      <span className={classes.cyanString}>error, response, body</span>) &#123;
      <br />
      &emsp;&emsp;<span className={classes.violetString}>if</span> (!error &&
      response.statusCode == <span className={classes.orangeString}>200</span>)
      &#123;
      <br />
      &emsp;&emsp;&emsp; <span className={classes.greenString}>console.</span>
      <span className={classes.yellowString}>log</span>(body);
      <br />
      &emsp;&emsp; &#125;
      <br />
      &#125; <br />
      <br />
      <span className={classes.yellowString}>request</span>
      (options, callback);
    </div>
  );
};

export default NodeValueReview;
