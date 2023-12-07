import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
import profileReducer from '../features/profile/profileSlice';
import modalFormReducer from '../features/edit/modalFormSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
    edit: modalFormReducer,
  },
});

export default store;
