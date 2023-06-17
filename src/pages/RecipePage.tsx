import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { fetchData } from '../redux/recipeReducer';
import RecipeCard from '../Components/recipeCard';
import { Link } from 'react-router-dom';

const RecipePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const { recipes } = useAppSelector((state) => state.recipes);

  return (
    <div className="main">
      <div className="sidebar">
        <Link to="/saved">Saved recipes</Link>
      </div>
      <div className="recipe-main">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipePage;
