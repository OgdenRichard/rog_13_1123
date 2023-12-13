import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { logout } from '../login/loginSlice';
import API_BASE_URL from '../../config/apiSettings';

const initialState = {
  isOpen: false,
  data: null,
  status: {
    success: false,
    loading: false,
    error: null,
  },
};

export const editUserName = createAsyncThunk(
  'modal/editUserName',
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

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(editUserName.pending, (state) => {
      state.data = null;
      state.status.loading = true;
      state.status.success = false;
      state.status.error = null;
    });
    builder.addCase(editUserName.fulfilled, (state, action) => {
      state.status.loading = false;
      state.status.success = true;
      state.isOpen = false;
      state.data = action.payload.body;
    });
    builder.addCase(editUserName.rejected, (state, action) => {
      state.status.loading = false;
      state.status.error = action.error;
    });
    builder.addCase(logout, (state) => {
      state.data = null;
      state.status.success = false;
      state.status.error = null;
    });
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
