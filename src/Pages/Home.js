import React, { useState, useEffect } from 'react'
import { Container, Carousel, Row, Col, Card } from 'react-bootstrap';
import { BaseApi } from '../Api/BaseApi';
import { IoFastFood, IoTime, IoCellular } from 'react-icons/io5';


export default function Home() {
    const getAllCategories = async () => {
        const data = await BaseApi.categoriesRecipe();
        if (data.status === true) {
            setAllCategories(data.results)
        }
    };

    const getHiglightRecipe = async () => {
        const data = await BaseApi.higlightRecipe();
        if (data.status === true) {
            setHiglightRecipe(data.results)
        }
    };

    const [higlightRecipe, setHiglightRecipe] = useState([]);
    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        getHiglightRecipe()
        getAllCategories()
    }, []);

    return (
        <Container className='mt-5'>
            {/* Carousel */}
            <Carousel>
                {higlightRecipe.map((item) => {
                    return (
                        <Carousel.Item interval={2000} key={item.key}
                            onClick={() => {
                                console.log(item.key);
                            }}>
                            <img
                                className="d-block w-100"
                                src={item.thumb}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <div className='d-flex justify-content-center'>
                                    <p className='mx-2'><IoTime /> {item.times}</p>
                                    <p className='mx-2'><IoFastFood /> {item.portion}</p>
                                    <p className='mx-2'><IoCellular /> {item.dificulty}</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>

            {/* Categories Card */}
            <h3 className='text-center mt-5 mb-4 fw-bolder'>Mau masak apa hari ini?</h3>
            <Row xs={1} sm={2} md={4} className="g-4 mb-5 categories-card">
                {allCategories.map((item) => (
                    <Col>
                        <Card className="text-center">
                            <Card.Img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                            <Card.ImgOverlay className='d-flex justify-content-center align-items-center'>
                                <Card.Title>{item.category}</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}