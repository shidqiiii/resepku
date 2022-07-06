import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BaseApi } from './Api/BaseApi';
import Footer from './Components/Footer';
import NavigationBar from './Components/NavigationBar';
import './CSS/App.css';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import RecipePerCategory from './Pages/RecipePerCategory';
import { categoriesContext } from "./Context/categoriesContext";

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
          <Route path="*" element={<NotFound replace to="/404" />} />
        </Routes>
      </Router>
      <Footer />
    </categoriesContext.Provider>
  );
}

export default App;
