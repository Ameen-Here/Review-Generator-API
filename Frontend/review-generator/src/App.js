import "./App.css";
import Header from "./components/Header.js";
import { Fragment } from "react";
import Main from "./components/Main";

import { apiActions } from "./store";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const btnHandler = () => {
    dispatch(apiActions.addApiKey("Hello"));
  };

  const apiKey = useSelector((state) => state.apiKey);
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
}

export default App;
