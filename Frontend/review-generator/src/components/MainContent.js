import { Fragment } from "react";

const MainContent = () => {
  return (
    <div>
      <p>
        Request Costs & Failed Requests The cost of each submitted job is
        calculated as follows: 10 credits base fee + 1 credit for every returned
        review You are only charged for successfully returned reviews. Example:
        A batch with one review job that contains 30 reviews costs 40 credits.
        (10 credits base fee + 30 credits for the reviews)
      </p>
      <h2>Authentification & Left Requests</h2>
      <p>
        ReviewApi uses API keys to allow access to the API. You can register a
        new API key at our developer portal. The /status route returns the
        number of left credits. To authorize, you can use the following ways:
      </p>
      <h2>Supported platform</h2>
      <p>
        This endpoint returns reviews from a review profile url. Please keep in
        mind that this live endpoint is only supposed to be used for small date
        ranges and small review amounts. Please use our asynchronous batch
        endpoint for any larger scaled projects.
      </p>
    </div>
  );
};

export default MainContent;
