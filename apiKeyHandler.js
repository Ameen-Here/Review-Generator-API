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
    await Api.findOneAndUpdate(
      { api: key },
      { date: curTime, noOfCalls: apiAnswer.email ? 50 : 25 }
    );
    apiAnswer = await Api.findOne({ api: key });
  }
  const value = apiAnswer.noOfCalls - noOfCalls;
  if (apiAnswer.noOfCalls < noOfCalls)
    return { isApiKeyValid: false, noOfCalls: false };
  await Api.findOneAndUpdate({ api: key }, { noOfCalls: value });

  return { isApiKeyValid: apiAnswer ? true : false, noOfCalls: true };
};

const createApiKey = async (email = false) => {
  try {
    const key = uuidv4();
    if (email) {
      const apiWithTheEmail = await Api.findOne({ email: email });
      if (apiWithTheEmail) throw new Error("New Email is required");
    }
    const apiData = new Api({
      api: key,
      date: dt.getTime(),
      noOfCalls: email ? 50 : 25,
    });
    await apiData.save();
    return key;
  } catch (err) {
    throw new Error(err.message);
  }
};

export { isValidApiKey, createApiKey };
