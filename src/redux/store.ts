import { configureStore } from '@reduxjs/toolkit';

import recipeReducer from './recipeReducer';
import savedRecipeReducer from './savedRecipeReducer';
import userReducer from './userReducer';

const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    saved: savedRecipeReducer,
    user: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
