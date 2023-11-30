import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  login: '',
  password: '',
  token: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.login = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export default loginSlice.reducer;
export const { setPassword, setUsername } = loginSlice.actions;
