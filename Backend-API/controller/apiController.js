import { createApiKey } from "../apiKeyHandler.js";
import { errorCreator, successCreator } from "./jsonResultGenerator.js";

const controlApiKey = async (req, res) => {
  let apiKey;
  try {
    if (req.query.email) {
      apiKey = await createApiKey(req.query.email);
    } else {
      apiKey = await createApiKey();
    }
    res.send(successCreator(apiKey));
  } catch (err) {
    res.send(errorCreator(err.message));
  }
};

export default controlApiKey;
