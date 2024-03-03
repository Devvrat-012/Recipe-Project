import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
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
        (state.currentUser = action.payload);
    },
    signInFailure: (state, action) => {
       (state.loading = false);
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      (state.loading = false),
        (state.currentUser = action.payload);
    },
    updateUserFailure: (state, action) => {
      (state.loading = false);
    },
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      (state.loading = false), (state.currentUser = null);
    },
    deleteUserFailure: (state, action) => {
      (state.loading = false);
    },
    signOutUserStart: (state) => {
      state.loading = true;
    },
    signOutUserSuccess: (state, action) => {
      (state.loading = false), (state.currentUser = null);
    },
    signOutUserFailure: (state, action) => {
      (state.loading = false);
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
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserFailure,
  signOutUserStart,
  signOutUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
