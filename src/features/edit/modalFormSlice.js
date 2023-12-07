import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API_BASE_URL from '../../config/apiSettings';

const initialState = {
  data: null,
  status: {
    success: false,
    loading: false,
    error: null,
  },
};

export const editUserName = createAsyncThunk(
  'modalForm/editUserName',
  async (data) => {
    const body = JSON.stringify(data.username);
    const response = await axios.put(`${API_BASE_URL}/user/profile`, body, {
      headers: {
        Authorization: `Bearer ${data.token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  },
);

const modalFormSlice = createSlice({
  name: 'editProfile',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(editUserName.pending, (state) => {
      state.status.loading = true;
      state.status.success = false;
      state.status.error = '';
    });
    builder.addCase(editUserName.fulfilled, (state, action) => {
      state.status.loading = false;
      state.status.success = true;
      state.data = action.payload.body;
    });
    builder.addCase(editUserName.rejected, (state, action) => {
      state.status.loading = false;
      state.status.error = action.error;
    });
  },
});

export default modalFormSlice.reducer;
