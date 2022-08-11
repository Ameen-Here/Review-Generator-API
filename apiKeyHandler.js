import { v4 as uuidv4 } from "uuid";

const APIKEYS = ["cd593d2f-e04a-40fd-aa62-f17158b82f7c"];

const isValidApiKey = (key) => APIKEYS.includes(key);

const createApiKey = () => {
  const key = uuidv4();
  APIKEYS.push(key);
  return key;
};

export { isValidApiKey, createApiKey };
