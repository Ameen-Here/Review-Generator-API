import "./App.css";
import Header from "./components/Header.js";
import { Fragment } from "react";
import Main from "./components/Main";

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
}

export default App;
