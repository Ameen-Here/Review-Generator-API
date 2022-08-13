import express from "express";
import { createApiKey } from "../apiKeyHandler.js";
import {
  errorCreator,
  successCreator,
} from "../controller/jsonResultGenerator.js";

const router = express.Router();

router.get("/newApiKey", async (req, res) => {
  let apiKey;
  console.log("wowo whats happening");
  console.log(req.query.email);
  try {
    if (req.query.email) {
      apiKey = await createApiKey(req.query.email);
    } else {
      apiKey = await createApiKey();
    }
    res.send(successCreator(apiKey));
  } catch (err) {
    res.send(errorCreator(err.message));
  }
});

export { router };
