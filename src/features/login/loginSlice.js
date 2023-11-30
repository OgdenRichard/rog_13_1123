import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API_BASE_URL from '../../config/apiSettings';

const initialState = {
  isLoggedIn: false,
  login: '',
  password: '',
  token: '',
  loading: false,
  data: [],
  error: '',
  mess: '',
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
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default loginSlice.reducer;
export const { setPassword, setUsername } = loginSlice.actions;
