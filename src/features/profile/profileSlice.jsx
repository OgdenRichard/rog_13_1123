import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API_BASE_URL from '../../config/apiSettings';

const initialState = {
  id: '',
  firstname: '',
  lastname: '',
  data: null,
  status: {
    loading: false,
    error: '',
  },
};

export const getUserData = createAsyncThunk(
  'profile/getUserData',
  async (token) => {
    const response = await axios.post(`${API_BASE_URL}/user/login`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
);

const profileSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state) => {
      state.status.loading = true;
      state.status.error = '';
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.status.loading = false;
      state.data = action.payload.body;
    });
    builder.addCase(getUserData.rejected, (state, action) => {
      state.status.loading = false;
      state.status.error = action.error;
    });
  },
});

export default profileSlice.reducer;
