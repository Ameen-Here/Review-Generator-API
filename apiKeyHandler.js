import { v4 as uuidv4 } from "uuid";
import Api from "./models/apiCollection.js";
const dt = new Date();
const MILLISECOND = 86400000;

const isValidApiKey = async (key, noOfCalls) => {
  const apiData = await Api.find({});
  let apiAnswer = apiData.filter((datas) => datas.api === key)[0];
  if (!apiAnswer) return { isApiKeyValid: false, noOfCalls: true };

  const curTime = dt.getTime(); // Getting current time to determine whether to update or not
  const diffTime = curTime - apiAnswer.date;
  if (diffTime > MILLISECOND) {
    await Api.findOneAndUpdate({ api: key }, { date: curTime, noOfCalls: 25 });
    apiAnswer = await Api.findOne({ api: key });
  }
  const value = apiAnswer.noOfCalls - noOfCalls;
  if (apiAnswer.noOfCalls < noOfCalls)
    return { isApiKeyValid: false, noOfCalls: false };
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
