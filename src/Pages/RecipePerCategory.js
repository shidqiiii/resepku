import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { BaseApi } from '../Api/BaseApi';
import HeaderCard from '../Components/Category Page/HeaderCard';
import RecipeCategoryCard from '../Components/Home Page/RecipeCategoryCard';
import Loading from '../Components/Loading';
import { categoriesContext } from '../Context/categoriesContext';

export default function RecipePerCategory() {
    const { key } = useParams();
    const allCategories = useContext(categoriesContext);

    const getCategory = () => {
        return allCategories.find(item =>
            item.key === key
        );
    }

    //Hit End Point (API)
    const getRecipePerCategories = async (key) => {
        const data = await BaseApi.recipesByCategory(key);
        if (data.status === true) {
            setrecipePerCategories(data.results);
        }
    }
    useEffect(() => {
        getRecipePerCategories(key);
    }, [key]);

    //Passing Data to State
    const [recipePerCategories, setrecipePerCategories] = useState([]);

    // Navigate Route
    const navigate = useNavigate();
    const navigateToRecipeDetail = (key) => {
        navigate(`/resep/${key}`);
        window.location.reload();
    };

    //Loading Data
    const LoadingData = () => {
        if (getCategory() !== undefined && recipePerCategories.length !== 0) {
            return (
                <>
                    <HeaderCard
                        getCategory={getCategory} />

                    <Container className="mt-5">
                        <RecipeCategoryCard
                            recipe={recipePerCategories}
                            navigateToRecipeDetail={navigateToRecipeDetail} />
                    </Container>
                </>
            )
        }

        return <Loading />
    }


    return (
        <div className='recipe-per-categories'>
            {LoadingData()}
        </div>
    );
}