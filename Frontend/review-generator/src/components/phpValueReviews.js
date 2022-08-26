import classes from "./CodeShower.module.css";

const PhpValueReviews = () => {
  return (
    <div>
      <span className={classes.greenString}>$ch</span> = curl_init();
      <br />
      curl_setopt(<span className={classes.greenString}>$ch</span>,
      CURLOPT_RETURNTRANSFER, <span className={classes.redString}>true</span>);
      <br />
      curl_setopt(
      <span className={classes.greenString}>$ch</span>, CURLOPT_HEADER,
      <span className={classes.redString}>false</span>);
      <br />
      <br />
      <span className={classes.greenString}>$data</span> = [<br />
      &emsp;&emsp;
      <span className={classes.yellowString}>"qty"</span> =&gt;{" "}
      <span className={classes.yellowString}>"10"</span>,<br />
      &emsp;&emsp;
      <span className={classes.yellowString}>"country"</span> =&gt;{" "}
      <span className={classes.yellowString}>"us,uk"</span>, <br />
      &emsp;&emsp;
      <span className={classes.yellowString}>"review"</span> =&gt;{" "}
      <span className={classes.yellowString}>"good"</span>,<br />
      ];
      <br />
      <br />
      curl_setopt(
      <span className={classes.greenString}>$ch</span>, CURLOPT_URL,
      <span className={classes.yellowString}>
        "https://lit-chamber-70662.herokuapp.com/v1/reviews?"
      </span>
      . http_build_query(<span className={classes.greenString}>$data</span>));
      <br />
      curl_setopt(
      <span className={classes.greenString}>$ch</span>, CURLOPT_HTTPHEADER,
      <span className={classes.violetString}>array</span>(
      <br />
      &emsp;&emsp;
      <span className={classes.yellowString}>
        "Content-Type:application/json"
      </span>
      ,<br />
      &emsp;&emsp;
      <span className={classes.yellowString}>
        "apikey: 3e46dd50-4d99-4507-a817-173c741e9034",
      </span>
      <br />
      ));
      <br />
      <br />
      <span className={classes.greenString}>$response</span> = curl_exec(
      <span className={classes.greenString}>$ch</span>);
      <br />
      curl_close(
      <span className={classes.greenString}>$ch</span>);
      <br />
      <br />
      <span className={classes.greenString}>$json</span> = json_decode(
      <span className={classes.greenString}>$response</span>);
      <br />
      <br />
      var_dump(
      <span className={classes.greenString}>$json</span>);
    </div>
  );
};

export default PhpValueReviews;
