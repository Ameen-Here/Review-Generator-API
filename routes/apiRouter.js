import express from "express";
import { createApiKey } from "../apiKeyHandler.js";

const router = express.Router();

router.get("/newApiKey", (req, res) => {
  const apiKey = createApiKey();
  res.send(apiKey);
});

export { router };
