import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiActions } from "../store";
import ApiDetails from "./ApiDetails";
import classes from "./MainContent.module.css";
import { useState } from "react";

const re = /\S+@\S+\.\S+/;

const ApiGetter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const emailInpRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const [emailInputField, setEmailInputField] = useState(false);

  const fetchData = async (url) => {
    const apiKeyGenerated = await fetch(url);
    const responseApi = await apiKeyGenerated.json();
    const { key, count } = responseApi.body;
    localStorage.setItem("key", key);
    localStorage.setItem("count", count);
    dispatch(apiActions.addApiKey(key));
    dispatch(apiActions.addCount(count));
  };

  const apiKeyGeneratorHandler = async () => {
    await fetchData("https://lit-chamber-70662.herokuapp.com/v1/newApiKey");
  };

  const emailGetApiHandler = async (e) => {
    e.preventDefault();

    const emailInput = emailInpRef.current.value.trim();

    if (emailInput.length !== 0 && re.test(emailInput.toLowerCase())) {
      setErrorMessage("");
      await fetchData(
        `https://lit-chamber-70662.herokuapp.com/v1/newApiKey?email=${emailInput}`
      );
    } else {
      setErrorMessage("Wrong email format. Try again.");
    }
  };

  const emailInputReveal = () => {
    setEmailInputField(true);
  };

  return (
    <Fragment>
      <h2>API Key</h2>
      <div className={classes.card}>
        <div className={classes.cardContent}>
          {!count && (
            <div
              role="alert"
              className={`${classes.alert} ${classes.alertWarning}`}
            >
              <b className={classes.bold}>Pro Tip</b>: Get your free Api key{" "}
              <a onClick={apiKeyGeneratorHandler}>here</a> and all code snippets
              below will contain your private Api key.{" "}
              <a onClick={emailInputReveal}>Register</a> with your email to
              increase your daily limit and all code snippets below will contain
              your private registered Api key.
            </div>
          )}

          {emailInputField && !count && (
            <form onSubmit={emailGetApiHandler} className={classes.form}>
              <h3>Register with your email address:</h3>
              <label>Email Address:</label>
              <input
                type="text"
                name="email"
                ref={emailInpRef}
                placeholder="Enter your email"
              />
              <p className={classes.errorHelper}>{errorMessage}</p>
              <button className={classes.btnApi}>Register</button>
            </form>
          )}

          {!count && !emailInputField && (
            <Fragment>
              <button
                onClick={apiKeyGeneratorHandler}
                className={classes.btnApi}
              >
                Generate API Key
              </button>
              <button className={classes.btnApi} onClick={emailInputReveal}>
                Register
              </button>
            </Fragment>
          )}
          {count && <ApiDetails count={count} />}
        </div>
      </div>
    </Fragment>
  );
};

export default ApiGetter;
