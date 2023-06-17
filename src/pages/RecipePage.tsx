import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { fetchData } from '../redux/recipeReducer';
import RecipeCard from '../Components/recipeCard';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';

const RecipePage = () => {
  const dispatch = useAppDispatch();
  const [categoryId, setCategoryId] = useState(0);
  const [search, setSearch] = useState('');
  const mysearch = search !== '' ? `?search=${search}` : '';
  const category = categoryId > 0 ? `?category=${categoryId}` : '';
  useEffect(() => {
    dispatch(fetchData({ category, mysearch }));
  }, [dispatch, category, mysearch]);

  const categories = ['Всі', 'Перші страви', 'Мясо', 'Десерти'];
  const { recipes } = useAppSelector((state) => state.recipes);

  return (
    <div className="main">
      <div className="sidebar">
        <Link to="/saved">Saved recipes</Link>
      </div>

      <div className="recipe-main">
        <div className="header">
          {categories.map((elem, id) => (
            <span>
              <button onClick={() => setCategoryId(id)}>{elem}</button>
            </span>
          ))}
          <div>
            <TextField
              sx={{ height: '50px', ml: '10px' }}
              id="outlined-controlled"
              label="Search"
              value={search}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSearch(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="recipe">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
