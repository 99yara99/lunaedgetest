import { configureStore } from '@reduxjs/toolkit';

import recipeReducer from './recipeReducer';

const store = configureStore({
  reducer: {
    recipes: recipeReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
