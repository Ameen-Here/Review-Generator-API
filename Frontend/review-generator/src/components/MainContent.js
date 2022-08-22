import classes from "./MainContent.module.css";

const MainContent = () => {
  return (
    <div className={classes.mainContent}>
      <h2>Documentation</h2>
      <div role="alert" className={`${classes.alert} ${classes.alertWarning}`}>
        <b className={classes.bold}>Pro Tip</b>: Get your free apikey{" "}
        <a href="#">here</a> and all code snippets below will contain your
        private apikey. <a href="#">Register</a> with your email to increase
        your daily limit and all code snippets below will contain your private
        registered apikey.
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
      <h2>Authentification & Left Requests</h2>
      <p>
        ReviewApi uses API keys to allow access to the API. You can register a
        new API key at our developer portal. The /status route returns the
        number of left credits. To authorize, you can use the following ways:
      </p>
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
