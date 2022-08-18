import mongoose from "mongoose";

const apiSchema = new mongoose.Schema({
  api: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
  },
  date: {
    type: Number,
    required: true,
  },
  noOfCalls: {
    type: Number,
  },
});

const Api = mongoose.model("Api", apiSchema);

export default Api;
