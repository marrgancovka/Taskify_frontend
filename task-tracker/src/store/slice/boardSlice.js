import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: 0,
    name: '',
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    clickOnBoard: (state, action) => {
        state.id = action.payload.id,
        state.name = action.payload.name
    }
  },
});

export const { clickOnBoard } = boardSlice.actions;
export default boardSlice.reducer;
