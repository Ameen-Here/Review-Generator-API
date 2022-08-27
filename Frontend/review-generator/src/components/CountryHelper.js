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
              <code>Middle Easter (Collection)</code>
            </th>
            <td>
              <b>ARAB</b>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <code>Asian (Collection)</code>
            </th>
            <td>
              <b>ASI</b>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <code>China</code>
            </th>
            <td>
              <b>CN</b>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <code>Europe (Collection)</code>
            </th>
            <td>
              <b>EUR</b>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <code>Germany</code>
            </th>
            <td>
              <b>DE</b>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <code>India</code>
            </th>
            <td>
              <b>IN</b>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <code>Italy</code>
            </th>
            <td>
              <b>IT</b>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <code>Japan</code>
            </th>
            <td>
              <b>JP</b>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <code>Portugal</code>
            </th>
            <td>
              <b>PT</b>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <code>Russia</code>
            </th>
            <td>
              <b>RU</b>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <code>Spain</code>
            </th>
            <td>
              <b>ES</b>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <code>Ukraine</code>
            </th>
            <td>
              <b>UA</b>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <code>United Kingdom</code>
            </th>
            <td>
              <b>GB</b>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <code>United States of America</code>
            </th>
            <td>
              <b>US</b>
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default CountryHelper;
