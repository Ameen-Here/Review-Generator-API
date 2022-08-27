import { Fragment } from "react";
import { useSelector } from "react-redux";

import ApiGetter from "./ApiGetter";
import ApiCount from "./ApiCount";

const ApiGet = () => {
  const count = useSelector((state) => state.count);
  return (
    <Fragment>
      <ApiGetter />
      {count && <ApiCount count={count} />}
    </Fragment>
  );
};

export default ApiGet;
