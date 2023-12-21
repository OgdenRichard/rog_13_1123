import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { logout } from '../login/loginSlice';
import { accounts } from '../../data/accountPlaceholder';
import API_BASE_URL from '../../config/apiSettings';

const initialState = {
  data: null,
  accountsData: null,
  status: {
    loading: false,
    error: null,
  },
};

export const getUserData = createAsyncThunk(
  'profile/getUserData',
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/user/profile`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error.toString());
    }
  },
);

const profileSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state) => {
      state.status.loading = true;
      state.data = null;
      state.accountsData = null;
      state.status.error = null;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.status.loading = false;
      state.data = action.payload.body;
      state.accountsData = accounts.filter(
        (data) => data.userId === state.data.id,
      );
    });
    builder.addCase(getUserData.rejected, (state, action) => {
      state.status.loading = false;
      state.status.error = action.payload;
    });
    builder.addCase(logout, (state) => {
      state.data = null;
      state.accountsData = null;
      state.status.error = null;
    });
  },
});

export const { updateData } = profileSlice.actions;
export default profileSlice.reducer;
