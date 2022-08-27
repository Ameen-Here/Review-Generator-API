import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const initialValue = {
  apiKey: localStorage.getItem("key")
    ? localStorage.getItem("key")
    : "YOUR_API_KEY",
  count: localStorage.getItem("count") ? localStorage.getItem("count") : false,
};

const apiSlice = createSlice({
  name: "api",
  initialState: initialValue,
  reducers: {
    addApiKey(state, action) {
      // Allowed to mutate state
      state.apiKey = action.payload;
    },
    addCount(state, action) {
      state.count = action.payload;
    },
  },
});

const store = configureStore({
  reducer: apiSlice.reducer,
});

export const apiActions = apiSlice.actions;

export default store;
