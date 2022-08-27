import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./ApiCount.module.css";

const ApiCount = (props) => {
  const apiKey = useSelector((state) => state.apiKey);
  const [noOfCount, setNoOfCount] = useState("");
  useEffect(() => {
    fetch(
      `https://lit-chamber-70662.herokuapp.com/v1/getCount?apiKey=${apiKey}`
    )
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        // localStorage.setItem("count", value.body);
        setNoOfCount(value.body);
      });
  }, []);
  console.log(noOfCount);
  return (
    <Fragment>
      <h1 className={classes.headerCount}>
        <span className={classes.bigText}>{noOfCount}/</span>
        {props.count}
      </h1>
      <p>Remains today</p>
    </Fragment>
  );
};

export default ApiCount;
