import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API_BASE_URL from '../../config/apiSettings';

const initialState = {
  isLoggedIn: false,
  remember: false,
  login: '',
  password: '',
  auth: {
    loading: false,
    token: '',
    error: '',
  },
};

export const userLogin = createAsyncThunk(
  'login/userLogin',
  async (loginData) => {
    const body = JSON.stringify(loginData);
    const response = await axios.post(`${API_BASE_URL}/user/login`, body, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  },
);

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
    setRemember: (state, action) => {
      state.remember = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.isLoggedIn = false;
      state.auth.token = '';
      state.auth.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.auth.loading = false;
      state.auth.token = action.payload.body.token;
      state.auth.error = '';
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.auth.loading = false;
      state.auth.error = action.error.message;
    });
  },
});

export default loginSlice.reducer;
export const { setPassword, setUsername, setRemember } = loginSlice.actions;
