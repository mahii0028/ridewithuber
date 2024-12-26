import { createSlice } from "@reduxjs/toolkit";

const captainInitialState = {
  captain: [
    {
      fullName: { firstName: "", lastName: "" },
      email: "",
      password: "",
      isLoading: false,
      error: null,
      vehicle: {
        color: "",
        plate: "",
        capacity: "",
        vehicleType: "",
      },
    },
  ],
};

const captainSlice = createSlice({
  name: "captain",
  initialState: captainInitialState,
  reducers: {
    captainSignup: (state, action) => {
      state.captain = action.payload;
    },
  },
});

export default captainSlice.reducer;
export const captainActions = captainSlice.actions;
