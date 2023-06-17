import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { fetchData } from '../redux/recipeReducer';
import RecipeCard from '../Components/recipeCard';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import { logIn, logOut } from '../redux/userReducer';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';

const RecipePage = () => {
  const dispatch = useAppDispatch();
  const [categoryId, setCategoryId] = useState(0);
  const [search, setSearch] = useState('');
  const categories = ['Всі', 'Перші страви', 'Мясо', 'Десерти'];
  const { recipes } = useAppSelector((state) => state.recipes);
  const { isAuth } = useAppSelector((state) => state.user);

  const mysearch = search !== '' ? `?search=${search}` : '';
  const category = categoryId > 0 ? `?category=${categoryId}` : '';

  useEffect(() => {
    dispatch(fetchData({ category, mysearch }));
    const auth = localStorage.getItem('auth');
    if (auth) {
      dispatch(logIn());
    }
  }, [dispatch, category, mysearch]);

  const handleClickLogOut = () => {
    dispatch(logOut());
    localStorage.removeItem('auth');
  };

  return (
    <div className="main">
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
      <div className="sidebar">
        {!isAuth && <Link to="/login">Log In</Link>}
        {isAuth && (
          <div className="sidebar-info">
            <Link to="/saved">Saved recipes</Link>
            <IconButton onClick={handleClickLogOut} aria-label="log Out">
              <LogoutIcon />
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipePage;
