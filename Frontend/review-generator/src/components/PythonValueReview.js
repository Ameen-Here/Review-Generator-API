import classes from "./CodeShower.module.css";
import { useSelector } from "react-redux";

const PythonValueReview = () => {
  const apiKeyStore = useSelector((store) => store.apiKey);
  return (
    <div>
      <span className={classes.violetString}>import</span> requests
      <br />
      <br />
      headers = &#123;
      <br />
      &emsp;&emsp;<span className={classes.yellowString}>"apikey"</span>:{" "}
      <span className={classes.yellowString}>"{apiKeyStore}"</span>
      <br />
      &#125;
      <br />
      <br />
      params = (<br />
      );
      <br />
      <br />
      response = requests.get(
      <span className={classes.yellowString}>
        'https://lit-chamber-70662.herokuapp.com/v1/reviews'
      </span>
      , headers=headers, params=params);
      <br />
      <span className={classes.greenString}>print</span>
      (response.text)
    </div>
  );
};

export default PythonValueReview;
