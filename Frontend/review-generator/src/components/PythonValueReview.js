import classes from "./CodeShower.module.css";

const PythonValueReview = () => {
  return (
    <div>
      <span className={classes.violetString}>import</span> requests
      <br />
      <br />
      headers = &#123;
      <br />
      &emsp;&emsp;<span className={classes.yellowString}>"apikey"</span>:{" "}
      <span className={classes.yellowString}>
        "3e46dd50-4d99-4507-a817-173c741e9034"
      </span>
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
