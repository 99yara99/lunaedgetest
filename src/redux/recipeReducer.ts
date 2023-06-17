import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RecipeState } from '../types';

export const fetchData = createAsyncThunk('recipes/fetchData', async () => {
  const response = await axios.get(
    'https://648c32b98620b8bae7ec71d4.mockapi.io/recipes'
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
