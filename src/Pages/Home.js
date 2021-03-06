import React, { useState, useEffect, useContext } from 'react'
import { Card, Container } from 'react-bootstrap';
import { BaseApi } from '../Api/BaseApi';
import { categoriesContext } from '../Context/categoriesContext';
import Loading from '../Components/Loading';
import { useNavigate } from 'react-router-dom';
import HeaderCard from '../Components/Home Page/HeaderCard';
import CategoriesCard from '../Components/Home Page/CategoryCard';
import NewsletterCard from '../Components/Home Page/NewsletterCard';
import RecipeCategoryCard from '../Components/Home Page/RecipeCategoryCard';
import RecipeHighlightCard from '../Components/Home Page/RecipeHighlightCard';

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

            case "result search":
                navigate(`/pencarian/${key}`);
                break

            default:
                break;
        }
        window.location.reload();
    };

    // Search Recipe
    const handleChange = (e) => {
        setData(e.target.value);
    }
    const handleSubmit = (e) => {
        // e.preventDefault();
        // console.log(data);
        navigateToRecipeDetail(data, "result search")
    }

    const [data, setData] = useState(null);

    //Loading Data
    const LoadingData = () => {
        if (allCategories.length !== 0 && higlightRecipe.length !== 0 && detailRecipe.length !== 0) {
            return (
                <>
                    <HeaderCard
                        handleChange={handleChange}
                        handleSubmit={handleSubmit} />

                    <Container className='mt-5'>
                        {/* All Categories */}
                        <CategoriesCard
                            navigateToRecipeDetail={navigateToRecipeDetail} />

                        {/* New Recipes */}
                        <div className="new-recipe-component">
                            <Card.Title className='fw-bolder fs-4 my-4'>Cobain Resep Terbaru</Card.Title>
                            <RecipeCategoryCard
                                navigateToRecipeDetail={navigateToRecipeDetail}
                                recipe={higlightRecipe} />
                        </div>

                        {/* Recipe Highlight */}
                        <RecipeHighlightCard
                            navigateToRecipeDetail={navigateToRecipeDetail}
                            detailRecipe={detailRecipe} />

                        {/* newsletter */}
                        <NewsletterCard />
                    </Container>
                </>
            )
        }
        return (<Loading />)
    }


    return (
        <>
            {LoadingData()}
        </>
    )
}
