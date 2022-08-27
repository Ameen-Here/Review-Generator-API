import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "api",
  initialState: { apiKey: "YOUR_API_KEY", count: false },
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
