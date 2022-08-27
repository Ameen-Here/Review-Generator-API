import { Fragment } from "react";

const CountryHelper = (props) => {
  return (
    <Fragment>
      <h3 id="countryList">Supported Countries</h3>
      <p>
        List of all countries supported in this API along with their code for
        URL.
      </p>
      <table className={props.classes.table}>
        <thead>
          <tr>
            <th scope="col" className={props.classes.pl0}>
              Country
            </th>
            <th scope="col" className={props.classes.pl0}>
              Country Code
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <code>China</code>
            </th>
            <td>
              <b>China</b>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <code>India</code>
            </th>
            <td>
              <b>india</b>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <code>Japan</code>
            </th>
            <td>
              <b>japan</b>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <code>Italy</code>
            </th>
            <td>
              <b>italy</b>
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default CountryHelper;
