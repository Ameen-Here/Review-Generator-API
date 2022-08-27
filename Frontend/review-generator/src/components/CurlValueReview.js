import classes from "./CodeShower.module.css";
import { useSelector } from "react-redux";

const CurlValueReview = () => {
  const apiKeyStore = useSelector((store) => store.apiKey);
  return (
    <div>
      curl&emsp;
      <span className={classes.yellowString}>
        "https://lit-chamber-70662.herokuapp.com/v1/review?apiKey={apiKeyStore}"
      </span>
    </div>
  );
};

export default CurlValueReview;
