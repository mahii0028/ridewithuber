import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
  users: [
    {
      fullName: { firstName: "", lastName: "" },
      email: "",
      password: "",
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    userSignup: (state, action) => {
      state.users = action.payload;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
