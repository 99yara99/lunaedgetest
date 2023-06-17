export interface Recipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  img: string;
  category: string;
  cookingtime: number;
  rating: number;
  id?: string;
}

export type RecipeState = { recipes: Recipe[] };
export type SavedState = { saved: Recipe[] };
