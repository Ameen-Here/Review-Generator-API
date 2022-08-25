const TableContent = () => {
  return (
    <table class={classes.table}>
      <thead>
        <tr>
          <th scope="col" class={classes.pl0}>
            Parameter
          </th>{" "}
          <th scope="col">Type</th> <th scope="col">Description</th>
        </tr>
      </thead>{" "}
      <tbody>
        <tr>
          <th scope="row" class="bt-0">
            <code class="highlighter-rouge">url</code>
          </th>{" "}
          <td>
            <b>required</b>, string
          </td>{" "}
          <td>The target URL</td>
        </tr>{" "}
        <tr>
          <th scope="row" class="bt-0">
            <code class="highlighter-rouge">amount</code>
          </th>{" "}
          <td>
            <b>optional</b>, integer
          </td>{" "}
          <td>Amount of reviews you want to retrieve. (Date descending)</td>
        </tr>{" "}
        <tr>
          <th scope="row" class="bt-0">
            <code class="highlighter-rouge">date_from</code>
          </th>{" "}
          <td>
            <b>optional</b>, string
          </td>{" "}
          <td>Format: 'yyyy-mm-dd', gets all reviews since that date</td>
        </tr>{" "}
        <tr>
          <th scope="row" class="bt-0">
            <code class="highlighter-rouge">country_code</code>
          </th>{" "}
          <td>
            <b>optional</b>, string
          </td>{" "}
          <td>
            Two-letter country code, scrapes reviews from the related country.
            Not supported for all platforms.{" "}
          </td>
        </tr>{" "}
        <tr>
          <th scope="row" class="bt-0">
            <code class="highlighter-rouge">fid</code>
          </th>{" "}
          <td>
            <b>optional</b>, string
          </td>{" "}
          <td>Google Knowledge Graph ID for google reviews.</td>
        </tr>{" "}
        <tr>
          <th scope="row" class="bt-0">
            <code class="highlighter-rouge">hl</code>
          </th>{" "}
          <td>
            <b>optional</b>, string
          </td>{" "}
          <td>Two-letter host language code for google reviews.</td>
        </tr>
      </tbody>
    </table>
  );
};
