import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/user-slice";

const store = configureStore({
  reducer: { user: userSlice, captain: "" },
});

export default store;
