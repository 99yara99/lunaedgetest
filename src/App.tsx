import { Route, Routes } from 'react-router-dom';
import './App.css';
import RecipePage from './pages/RecipePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import SavedRecipesPage from './pages/SavedRecipePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RecipePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/registration" element={<RegisterPage />}></Route>
        <Route path="/saved" element={<SavedRecipesPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
