import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { logout } from '../login/loginSlice';
import API_BASE_URL from '../../config/apiSettings';

const initialState = {
  isOpen: false,
  data: null,
  userName: {
    inputError: false,
    firstName: '',
    lastName: '',
  },
  status: {
    loading: false,
    error: null,
  },
};

export const editUserName = createAsyncThunk(
  'modal/editUserName',
  async (data, { rejectWithValue }) => {
    try {
      const body = JSON.stringify(data.username);
      const response = await axios.put(`${API_BASE_URL}/user/profile`, body, {
        headers: {
          Authorization: `Bearer ${data.token}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || error.toString());
    }
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
      state.userName.firstName = '';
      state.userName.lastName = '';
      state.isOpen = false;
      state.status.error = null;
    },
    setFirstName: (state, action) => {
      state.userName.firstName = action.payload;
      state.userName.inputError = false;
    },
    setLastName: (state, action) => {
      state.userName.lastName = action.payload;
      state.userName.inputError = false;
    },
    setInputError: (state, action) => {
      state.userName.inputError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(editUserName.pending, (state) => {
      state.data = null;
      state.status.loading = true;
      state.status.error = null;
    });
    builder.addCase(editUserName.fulfilled, (state, action) => {
      state.status.loading = false;
      state.isOpen = false;
      state.userName.firstName = '';
      state.userName.lastName = '';
      state.data = action.payload.body;
    });
    builder.addCase(editUserName.rejected, (state, action) => {
      state.status.loading = false;
      state.status.error = action.payload;
    });
    builder.addCase(logout, (state) => {
      state.data = null;
      state.status.error = null;
    });
  },
});

export const {
  openModal,
  closeModal,
  setFirstName,
  setLastName,
  setInputError,
} = modalSlice.actions;
export default modalSlice.reducer;
