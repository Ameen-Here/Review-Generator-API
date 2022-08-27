import { createApiKey } from "../apiKeyHandler.js";
import { errorCreator, successCreator } from "./jsonResultGenerator.js";

const controlApiKey = async (req, res) => {
  let apiKey, count;
  try {
    if (req.query.email) {
      apiKey = await createApiKey(req.query.email);
      count = 25;
    } else {
      apiKey = await createApiKey();
      count = 50;
    }
    res.send(successCreator({ key: apiKey, count }));
  } catch (err) {
    res.send(errorCreator(err.message));
  }
};

export default controlApiKey;
