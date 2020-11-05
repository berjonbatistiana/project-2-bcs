import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  user: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;