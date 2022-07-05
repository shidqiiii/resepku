import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BaseApi } from './Api/BaseApi';
import Footer from './Components/Footer';
import NavigationBar from './Components/NavigationBar';
import { CategoriesContext, RecipePerCategoriesContext } from './Context/Context';
import './CSS/App.css';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import RecipePerCategory from './Pages/RecipePerCategory';

function App() {
  const getAllCategories = async () => {
    const data = await BaseApi.allCategoriesRecipe();
    if (data.status === true) {
      setAllCategories(data.results)
    }
  }

  const getRecipePerCategories = async (key, category) => {
    const data = await BaseApi.recipesByCategory(key);
    if (data.status === true) {
      setrecipePerCategories(data.results)
      setrecipePerCategoriesSelected(category);
    }
  }

  const [allCategories, setAllCategories] = useState([]);
  const [recipePerCategories, setrecipePerCategories] = useState([]);
  const [recipePerCategoriesSelected, setrecipePerCategoriesSelected] = useState(null);

  useEffect(() => {
    getAllCategories()
  }, []);

  return (
    <CategoriesContext.Provider value={allCategories}>
      <RecipePerCategoriesContext.Provider value={{ recipePerCategoriesSelected, recipePerCategories }}>
        <Router>
          <NavigationBar getRecipePerCategories={getRecipePerCategories} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kategori/:key" element={<RecipePerCategory />} />
            <Route path="*" element={<NotFound replace to="/404" />} />
          </Routes>
        </Router>
        <Footer />
      </RecipePerCategoriesContext.Provider>
    </CategoriesContext.Provider>
  );
}

export default App;
