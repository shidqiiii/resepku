import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { BaseApi } from '../Api/BaseApi';
import ContentCard from '../Components/Detail Page/ContentCard';
import InfoCard from '../Components/Detail Page/InfoCard';
import Loading from '../Components/Loading';

export default function RecipeDetail() {
    const { key } = useParams();

    //Hit End Point (API)
    const getRecipeDetail = async (key) => {
        const data = await BaseApi.recipeDetail(key);
        if (data.status === true) {
            setRecipeDetail(data.results);
        }
    }
    useEffect(() => {
        getRecipeDetail(key);
    }, []);

    //Passing Data to State
    const [recipeDetail, setRecipeDetail] = useState(null);

    //Loading Data
    const LoadingData = () => {
        if (recipeDetail !== null) {
            return (
                <Container className='mt-5'>
                    <img className='header-thumbnail' src={recipeDetail.thumb} alt="Logo" />
                    <ContentCard recipeDetail={recipeDetail} />
                </Container>
            )
        }

        return <Loading />
    }

    return (
        <div className='recipe-detail'>
            {LoadingData()}
        </div>
    )
}
