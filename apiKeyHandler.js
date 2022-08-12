import { v4 as uuidv4 } from "uuid";
import Api from "./models/apiCollection.js";
const dt = new Date();

const isValidApiKey = async (key, noOfCalls) => {
  const apiData = await Api.find({});
  const apiAnswer = apiData.filter((datas) => datas.api === key)[0];
  const value = apiAnswer.noOfCalls - noOfCalls;
  if (apiAnswer.noOfCalls < noOfCalls)
    return { isApiKeyValid: false, noOfCallsfalse: false };
  await Api.findOneAndUpdate({ api: key }, { noOfCalls: value });

  return { isApiKeyValid: apiAnswer ? true : false, noOfCalls: true };
};

const createApiKey = async () => {
  const key = uuidv4();
  const apiData = new Api({
    api: key,
    date: dt.getTime(),
    noOfCalls: 25,
  });
  await apiData.save();
  return key;
};

export { isValidApiKey, createApiKey };
