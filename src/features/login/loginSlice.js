import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API_BASE_URL from '../../config/apiSettings';

const initialState = {
  isLoggedIn: false,
  credentials: {
    remember: false,
    login: '',
    password: '',
  },
  auth: {
    loading: false,
    token: null,
    error: null,
  },
};

export const userLogin = createAsyncThunk(
  'login/userLogin',
  async (loginData, { rejectWithValue }) => {
    const body = JSON.stringify(loginData);
    try {
      const response = await axios.post(`${API_BASE_URL}/user/login`, body, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.response?.data.error ||
          error?.response?.data ||
          error?.message ||
          error.toString(),
      );
    }
  },
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.credentials.login = action.payload;
    },
    setPassword: (state, action) => {
      state.credentials.password = action.payload;
    },
    setRemember: (state, action) => {
      state.credentials.remember = action.payload;
    },
    resetLogin: (state) => {
      state.isLoggedIn = false;
      state.auth.token = null;
      state.credentials.password = '';
      state.credentials.login = state.credentials.remember
        ? state.credentials.login
        : '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.auth.loading = true;
      state.auth.token = null;
      state.auth.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.credentials.login = state.credentials.remember
        ? state.credentials.login
        : '';
      state.credentials.password = '';
      state.auth.token = action.payload.body.token;
      state.auth.loading = false;
      state.auth.error = null;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.auth.loading = false;
      state.auth.error = action.error;
    });
  },
});

export default loginSlice.reducer;
export const { setPassword, setUsername, setRemember, resetLogin } =
  loginSlice.actions;
