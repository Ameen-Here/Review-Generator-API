import { createApiKey, isValidApiKey } from "../apiKeyHandler.js";
import { errorCreator, successCreator } from "./jsonResultGenerator.js";

const controlApiKey = async (req, res) => {
  let apiKey, count;
  try {
    if (req.query.email) {
      apiKey = await createApiKey(req.query.email);
      count = 50;
    } else {
      apiKey = await createApiKey();
      count = 25;
    }
    res.status(200).send(successCreator({ key: apiKey, count }));
  } catch (err) {
    res.status(300).send(errorCreator(err.message));
  }
};

export const getCount = async (req, res) => {
  const apiKey = req.query.apiKey;
  const noOfCalls = await isValidApiKey(apiKey, 0);
  res.status(200).send(successCreator(noOfCalls));
};

export default controlApiKey;
