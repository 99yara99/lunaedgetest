import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Recipe, RecipeState } from '../types';

export const fetchData = createAsyncThunk<
  Recipe[],
  { category: string; mysearch: string }
>('recipes/fetchData', async ({ category, mysearch }) => {
  const response = await axios.get(
    `https://648c32b98620b8bae7ec71d4.mockapi.io/recipes${category}${mysearch}`
  );
  return response.data;
});

const initialState: RecipeState = {
  recipes: [],
};

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.recipes = action.payload;
    });
  },
});

export default recipeSlice.reducer;
