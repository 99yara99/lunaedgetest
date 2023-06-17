import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isAuth: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isAuth = true;
    },
    logOut: (state) => {
      state.isAuth = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
