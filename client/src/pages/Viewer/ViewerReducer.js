import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  token: !!localStorage.getItem("token") ? localStorage.getItem("token") : null,
};

const viewerSlice = createSlice({
  name: "viewer",
  initialState: INITIAL_STATE,
  reducers: {
    setViewerToken: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
});

export const { setViewerToken } = viewerSlice.actions;

export const viewerReducer = viewerSlice.reducer;
