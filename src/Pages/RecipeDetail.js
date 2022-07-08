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

    //Is Thumbnail null?
    const thumb = () => {
        if (recipeDetail.thumb !== null) {
            return recipeDetail.thumb
        }
        return "https://images.unsplash.com/photo-1613865342405-8bcc28fd22c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    }

    //Loading Data
    const LoadingData = () => {
        if (recipeDetail !== null) {
            return (
                <Container className='mt-5'>
                    <img className='header-thumbnail' src={thumb()} alt="Logo" />
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
