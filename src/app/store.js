import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "../features/place/placeSlice";

export default configureStore({
  reducer: {
    places: placeReducer,
  },
  devTools: true,
});
