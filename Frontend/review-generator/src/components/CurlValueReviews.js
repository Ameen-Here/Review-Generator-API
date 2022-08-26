import classes from "./CodeShower.module.css";

const CurlValueReviews = () => {
  return (
    <div>
      curl&emsp;
      <span className={classes.yellowString}>
        "https://lit-chamber-70662.herokuapp.com/v1/reviews?apiKey=3e46dd50-4d99-4507-a817-173c741e9034&qty=10&country=us,uk&review=good"
      </span>
    </div>
  );
};

export default CurlValueReviews;
