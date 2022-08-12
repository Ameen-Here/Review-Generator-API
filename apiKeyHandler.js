import { v4 as uuidv4 } from "uuid";
import Api from "./models/apiCollection.js";
const dt = new Date();

const isValidApiKey = async (key) => {
  const apiData = await Api.find({});
  const apiCollections = apiData.map((datas) => datas.api);
  return apiCollections.includes(key);
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
