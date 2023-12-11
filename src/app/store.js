import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
import profileReducer from '../features/profile/profileSlice';
import modalReducer from '../features/modal/modalSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
    edit: modalReducer,
  },
});

export default store;
