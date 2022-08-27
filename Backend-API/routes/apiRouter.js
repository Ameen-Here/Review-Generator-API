import express from "express";
import controlApiKey, { getCount } from "../controller/apiController.js";

const router = express.Router();

router.get("/newApiKey", controlApiKey);

router.get("/getCount", getCount);

export { router };
