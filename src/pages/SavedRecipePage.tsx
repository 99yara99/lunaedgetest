import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import RecipeCard from '../Components/recipeCard';
import IconButton from '@mui/material/IconButton/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteRecipe } from '../redux/savedRecipeReducer';

const RecipePage = () => {
  const { saved } = useAppSelector((state) => state.saved);
  const dispatch = useAppDispatch();

  return (
    <div className="card-main">
      {saved.map((card, index) => (
        <>
          <RecipeCard
            key={card.id}
            title={card.title}
            description={card.description}
            ingredients={card.ingredients}
            instructions={card.instructions}
            img={card.img}
            category={card.category}
            cookingtime={card.cookingtime}
            rating={card.rating}
          />
          <IconButton
            onClick={() => dispatch(deleteRecipe(index))}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </>
      ))}
    </div>
  );
};

export default RecipePage;
