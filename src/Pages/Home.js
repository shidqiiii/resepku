import React, { useState, useEffect, useContext } from 'react'
import { Container } from 'react-bootstrap';
import { BaseApi } from '../Api/BaseApi';
import { categoriesContext } from '../Context/categoriesContext';
import Loading from '../Components/Loading';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Home/Header';
import CategoriesCard from '../Components/Home/CategoryCard';
import Newsletter from '../Components/Home/Newsletter';
import RecipeCategoryCard from '../Components/Home/RecipeCategoryCard';
import RecipeHighlightCard from '../Components/Home/RecipeHighlightCard';

export default function Home() {
    const allCategories = useContext(categoriesContext);

    //Hit End Point (API)
    const getHiglightRecipe = async () => {
        const data = await BaseApi.higlightRecipe();
        if (data.status === true) {
            setHiglightRecipe(data.results)
        }
    };
    const getRecipeRotiGoreng = async (key) => {
        const data = await BaseApi.detailRecipe(key);
        if (data.status === true) {
            setDetailRecipe(data.results)
        }
    };
    useEffect(() => {
        getHiglightRecipe()
        getRecipeRotiGoreng("resep-roti-goreng-isi-tempe-lada-hitam")
    }, []);

    //Passing Data to State
    const [higlightRecipe, setHiglightRecipe] = useState([]);
    const [detailRecipe, setDetailRecipe] = useState([]);

    // Navigate Route
    const navigate = useNavigate();
    const navigateToRecipeDetail = (key, type) => {
        switch (type) {
            case "detail":
                navigate(`/resep/${key}`);
                break;

            case "category":
                navigate(`/kategori/${key}`);
                break;

            default:
                break;
        }
    };

    //Loading Data
    const LoadingData = () => {
        if (allCategories.length !== 0 && higlightRecipe.length !== 0 && detailRecipe.length !== 0) {
            return (<>
                <Header />

                <Container className='mt-5'>
                    {/* All Categories */}
                    <CategoriesCard
                        navigateToRecipeDetail={navigateToRecipeDetail} />

                    {/* New Recipes */}
                    <RecipeCategoryCard
                        navigateToRecipeDetail={navigateToRecipeDetail}
                        higlightRecipe={higlightRecipe} />

                    {/* Recipe Highlight */}
                    <RecipeHighlightCard
                        navigateToRecipeDetail={navigateToRecipeDetail}
                        detailRecipe={detailRecipe} />

                    {/* newsletter */}
                    <Newsletter />
                </Container>
            </>)
        }
        return (<Loading />)
    }


    return (
        <>
            {LoadingData()}
        </>
    )
}
