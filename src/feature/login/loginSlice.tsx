import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  loggedInUserEmail: string;
  loggedInJWT: string;
  isLoggedIn: boolean;
}

const initialState: CounterState = {
  loggedInUserEmail: "",
  loggedInJWT: "",
  isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginEmail: (state, action: PayloadAction<string>) => {
      state.loggedInUserEmail = action.payload;
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    setJWT: (state, action: PayloadAction<string>) => {
      state.loggedInJWT = action.payload;
    },
  },
});

export const { setLoginEmail, login, logout, setJWT } = loginSlice.actions;

export default loginSlice.reducer;
