import { createSlice } from '@reduxjs/toolkit';
import { SavedState } from '../types';

const initialState: SavedState = {
  saved: [],
};

const savedSlice = createSlice({
  name: 'saved',
  initialState,
  reducers: {
    saveRecipe: (state, action) => {
      state.saved.push(action.payload);
    },
    deleteRecipe: (state, action) => {
      console.log(action.payload);
      state.saved = state.saved.filter((_, i) => i !== action.payload);
    },
  },
});

export const { saveRecipe, deleteRecipe } = savedSlice.actions;
export default savedSlice.reducer;
