import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiActions } from "../store";
import classes from "./MainContent.module.css";

const ApiGetter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const apiKeyGeneratorHandler = async () => {
    const apiKeyGenerated = await fetch(
      "https://lit-chamber-70662.herokuapp.com/v1/newApiKey"
    );
    const responseApi = await apiKeyGenerated.json();
    const { key, count } = responseApi.body;
    dispatch(apiActions.addApiKey(key));
    dispatch(apiActions.addCount(count));
  };

  return (
    <Fragment>
      <h2>API Key</h2>
      <div className={classes.card}>
        <div className={classes.cardContent}>
          <div
            role="alert"
            className={`${classes.alert} ${classes.alertWarning}`}
          >
            <b className={classes.bold}>Pro Tip</b>: Get your free Api key{" "}
            <a href="#">here</a> and all code snippets below will contain your
            private Api key. <a href="#">Register</a> with your email to
            increase your daily limit and all code snippets below will contain
            your private registered Api key.
          </div>
          {!count && (
            <Fragment>
              <button
                onClick={apiKeyGeneratorHandler}
                className={classes.btnApi}
              >
                Generate API Key
              </button>
              <button className={classes.btnApi}>Register</button>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ApiGetter;
