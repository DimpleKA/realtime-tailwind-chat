import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './feature/login/loginSlice';
import responsiveReducer from './feature/responsive/responsiveSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    responsive: responsiveReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
