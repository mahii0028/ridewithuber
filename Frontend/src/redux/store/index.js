import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/user-slice";
import captainSlice from "../slices/captain-slice";

const store = configureStore({
  reducer: { user: userSlice, captain: captainSlice },
});

export default store;
