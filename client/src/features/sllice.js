import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  likedMovies: [],
};

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
    },
    setLogOut: (state) => {
      state.user = null;
    },
  },
});

export const { setLogin, setLogOut } = slice.actions;
export default slice.reducer;
