import classes from "./CodeShower.module.css";
import { useSelector } from "react-redux";

const PythonValueReviews = () => {
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
      params = ( <br />
      &emsp;&emsp;&emsp;(
      <span className={classes.yellowString}>"qty"</span>,
      <span className={classes.yellowString}>"10"</span>),
      <br />
      &emsp;&emsp; (<span className={classes.yellowString}>"country"</span>,
      <span className={classes.yellowString}>"us,uk"</span>),
      <br />
      &emsp;&emsp; (<span className={classes.yellowString}>"review"</span>,
      <span className={classes.yellowString}>"good"</span>)<br />
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

export default PythonValueReviews;
