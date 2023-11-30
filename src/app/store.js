import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import loginReducer from '../features/login/loginSlice';

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    login: loginReducer,
  },
});

export default store;
