import express from "express";
import { createApiKey } from "../apiKeyHandler.js";
import { successCreator } from "../controller/jsonResultGenerator.js";

const router = express.Router();

router.get("/newApiKey", async (req, res) => {
  const apiKey = await createApiKey();
  res.send(successCreator(apiKey));
});

export { router };
