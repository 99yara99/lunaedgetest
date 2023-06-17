import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { fetchData } from '../redux/recipeReducer';
import RecipeCard from '../Components/recipeCard';

const RecipePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const { recipes } = useAppSelector((state) => state.recipes);
  console.log(recipes);

  return (
    <div className="recipe-main">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          title={recipe.title}
          description={recipe.description}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          img={recipe.img}
          category={recipe.category}
          cookingtime={recipe.cookingtime}
          rating={recipe.rating}
        />
      ))}
    </div>
  );
};

export default RecipePage;
