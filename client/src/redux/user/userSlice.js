import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      (state.loading = false),
        (state.currentUser = action.payload),
        (state.error = null);
    },
    signInFailure: (state, action) => {
      (state.error = action.payload), (state.loading = false);
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      (state.loading = false),
        (state.currentUser = action.payload),
        (state.error = null);
    },
    updateUserFailure: (state, action) => {
      (state.error = action.payload), (state.loading = false);
    },
  },
});

export const {
  signInFailure,
  signInStart,
  signInSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
