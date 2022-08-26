import CountryHelper from "./CountryHelper";
import classes from "./MainContent.module.css";
import RandomReview from "./RandomReview";
import RandomReviews from "./RandomReviews";

const MainContent = () => {
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
      <RandomReview classes={classes} />

      <RandomReviews classes={classes} />

      <CountryHelper classes={classes} />
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
