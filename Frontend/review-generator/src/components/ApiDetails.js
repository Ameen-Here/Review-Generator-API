import { Fragment } from "react";
import { useSelector } from "react-redux";
import ApiCount from "./ApiCount";
import classes from "./ApiDetails.module.css";

const ApiDetails = (props) => {
  const apiKey = useSelector((state) => state.apiKey);
  return (
    <div className={classes.detailBody}>
      <div>
        <p>Your API is</p>
        <h3>{apiKey}</h3>
      </div>
      <div>
        <ApiCount count={props.count} />
      </div>
    </div>
  );
};

export default ApiDetails;
