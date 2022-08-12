import express from "express";
import { createApiKey } from "../apiKeyHandler.js";
import Api from "../models/apiCollection.js";
const dt = new Date();

const router = express.Router();

router.get("/newApiKey", async (req, res) => {
  const apiKey = createApiKey();
  const apiData = new Api({
    api: apiKey,
    date: dt.getTime(),
    noOfCalls: 25,
  });
  await apiData.save();
  res.send(apiKey);
});

export { router };
