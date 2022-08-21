import express from "express";
import controlApiKey from "../controller/apiController.js";

const router = express.Router();

router.get("/newApiKey", controlApiKey);

export { router };
