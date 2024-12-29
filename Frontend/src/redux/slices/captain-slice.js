import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCaptainProfile = createAsyncThunk("captainProfile", async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
});

const captainInitialState = {
  captain: [
    {
      fullName: { firstName: "", lastName: "" },
      email: "",
      password: "",
      vehicle: {
        color: "",
        plate: "",
        capacity: "",
        vehicleType: "",
      },
    },
  ],
  isLoading: false,
  isError: false,
  error: null,
};

const captainSlice = createSlice({
  name: "captain",
  initialState: captainInitialState,
  reducers: {
    captainSignup: (state, action) => {
      state.captain = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCaptainProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCaptainProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.captain = action.payload;
    });
    builder.addCase(fetchCaptainProfile.rejected, (state, action) => {
      state.isError = true;
      state.error = action.payload;
      console.log(action.payload);
    });
  },
});

export default captainSlice.reducer;
export const captainActions = captainSlice.actions;
