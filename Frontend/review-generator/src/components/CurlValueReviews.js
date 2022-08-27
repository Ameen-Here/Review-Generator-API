import classes from "./CodeShower.module.css";
import { useSelector } from "react-redux";

const CurlValueReviews = () => {
  const apiKeyStore = useSelector((store) => store.apiKey);
  return (
    <div>
      curl&emsp;
      <span className={classes.yellowString}>
        "https://lit-chamber-70662.herokuapp.com/v1/reviews?apiKey={apiKeyStore}
        &qty=10&country=us,uk&review=good"
      </span>
    </div>
  );
};

export default CurlValueReviews;
