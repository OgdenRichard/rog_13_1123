import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
import profileReducer from '../features/profile/profileSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
  },
});

export default store;
