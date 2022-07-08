import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { BaseApi } from '../Api/BaseApi';
import Loading from '../Components/Loading';

export default function RecipeDetail() {
    const { key } = useParams();

    const getRecipeDetail = async (key) => {
        const data = await BaseApi.recipeDetail(key);
        if (data.status === true) {
            setRecipeDetail(data.results);
        }
    }

    const [recipeDetail, setRecipeDetail] = useState(null);

    useEffect(() => {
        getRecipeDetail(key);
    }, []);

    return (
        <div className='recipe-detail'>
            {/* {console.log(recipeDetail)} */}


            {recipeDetail !== null ?
                (
                    <Container className='mt-5'>
                        <img className='header-thumbnail' src={recipeDetail.thumb} alt="Logo" />
                        <Card className='text-center card-content my-5 justify-content-center'>
                            <Card.Title className='fw-bold fs-3'>{recipeDetail.title}</Card.Title>
                            <Card.Text className='fs-5'>{recipeDetail.author.datePublished} oleh {recipeDetail.author.user}</Card.Text>
                            <div className='card-info my-3 d-flex justify-content-center shadow'>
                                <div className='box'>
                                    <small>Porsi</small>
                                    <Card.Text>{recipeDetail.servings}</Card.Text>
                                </div>
                                <div className='box'>
                                    <small>Waktu</small>
                                    <Card.Text>{recipeDetail.times}</Card.Text>
                                </div>
                                <div className='box'>
                                    <small>Tingkat Kesusahan</small>
                                    <Card.Text>{recipeDetail.dificulty}</Card.Text>
                                </div>
                            </div>
                            <div className='card-ingredient'>
                                <div>
                                    <Card.Title className='my-4 fw-bold'>Bahan yang Diperlukan</Card.Title>
                                    <Row xs={1} md={2} className="g-2 mx-5">
                                        {recipeDetail.ingredient.map(item => (
                                            <Col key={item}>
                                                <Card.Text>{item}</Card.Text>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                                <div className='mx-5'>
                                    <Card.Title className='my-4 fw-bold'>Cara Memasak</Card.Title>
                                    {recipeDetail.step.map(item => (
                                        <Card.Text key={item}>{item}</Card.Text>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </Container>
                )
                :
                (
                    <Loading />
                )
            }
        </div>
    )
}
