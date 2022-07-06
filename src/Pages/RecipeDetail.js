import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BaseApi } from '../Api/BaseApi';

export default function RecipeDetail() {
    const { key } = useParams();

    const getRecipeDetail = async (key) => {
        const data = await BaseApi.recipeDetail(key);
        if (data.status === true) {
            setRecipeDetail(data.results);
        }
    }

    const [recipeDetail, setRecipeDetail] = useState([]);

    useEffect(() => {
        getRecipeDetail(key);
    }, []);

    return (
        <>
            {console.log(recipeDetail)}
            <div>RecipeDetail</div>
            <h1>{recipeDetail.title}</h1>
        </>
    )
}
