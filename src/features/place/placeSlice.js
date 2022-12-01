import { createSlice } from "@reduxjs/toolkit";

export const placeSlice = createSlice({
  name: "places",
  initialState: {
    history: [],
  },
  reducers: {
    recordHistory: (state, action) => {
      console.log(state, action);

      state.history.unshift(action.payload);
    },
  },
});

// For Dispatch
export const { recordHistory } = placeSlice.actions;

// This is for configureStore
export default placeSlice.reducer;
