import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  userlist: string;
  chatpage: string;
}

const initialState: CounterState = {
  userlist: "",
  chatpage: "hidden",
};

const responsiveSlice = createSlice({
  name: 'responsive',
  initialState,
  reducers: {
    displayUser: (state, action: PayloadAction<string>) => {
      state.userlist = action.payload;
    },
    hideUser: (state) => {
      state.userlist = "hidden";
    },
    displayChat: (state, action: PayloadAction<string>) => {
      state.chatpage = action.payload;
    },
    hideChat: (state) => {
      state.chatpage = "hidden";
    },
  },
});

export const { displayUser, hideUser, displayChat, hideChat } = responsiveSlice.actions;

export default responsiveSlice.reducer;
