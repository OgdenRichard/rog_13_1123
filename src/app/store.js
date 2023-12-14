import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk';
import loginReducer from '../features/login/loginSlice';
import profileReducer from '../features/profile/profileSlice';
import modalReducer from '../features/modal/modalSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['login'],
};

const rootReducer = combineReducers({
  login: persistReducer(
    { key: 'login', storage, blacklist: ['auth'] },
    loginReducer,
  ),
  profile: profileReducer,
  edit: modalReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
export const persistor = persistStore(store);
