import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BaseApi } from './Api/BaseApi';
import Footer from './Components/Footer';
import NavigationBar from './Components/NavigationBar';
import './CSS/App.css';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import RecipePerCategory from './Pages/RecipePerCategory';
import { categoriesContext } from "./Context/categoriesContext";
import RecipeDetail from './Pages/RecipeDetail';
import FindRecipe from './Pages/FindRecipe';

function App() {
  const getAllCategories = async () => {
    const data = await BaseApi.allCategoriesRecipe();
    if (data.status === true) {
      setAllCategories(data.results)
    }
  }

  const [allCategories, setAllCategories] = useState([]);


  useEffect(() => {
    getAllCategories()
  }, []);

  return (
    <categoriesContext.Provider value={allCategories}>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kategori/:key" element={<RecipePerCategory />} />
          <Route path="/resep/:key" element={<RecipeDetail />} />
          <Route path="/pencarian/:key" element={<FindRecipe />} />
          <Route path="*" element={<NotFound replace to="/404" />} />
        </Routes>
      </Router>
      <Footer />
    </categoriesContext.Provider>
  );
}

export default App;
