import React, { useState, useEffect } from 'react'
import { Container, Carousel, Row, Col, Card, Form, Button } from 'react-bootstrap';
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
        <>
            <Card className='header'>
                <Card.Img src="./images/header.png" alt="Card image" />
                <Card.ImgOverlay className='d-flex align-items-center justify-content-center text-center'>
                    <Container className='px-5'>
                        <Card.Title className='fs-2 text-uppercase fw-bolder'>Mau Masak Apa Hari ini?</Card.Title>
                        <Card.Text className='fs-5'>
                            Jelajahi ratusan resep terbaik dari seluruh dunia, <br /> dan nikmati seni dalam memasak!
                        </Card.Text>
                        <Form className="d-flex justify-content-center">
                            <Form.Control
                                type="search"
                                placeholder="Cari resep terbaru"
                            />
                            <Button>Search</Button>
                        </Form>
                    </Container>
                </Card.ImgOverlay>
            </Card>

            <Container className='mt-5'>

                {/* All Categories */}
                <Card.Title className='fw-bolder fs-4 my-4'>Berdasarkan Kategori</Card.Title>
                <div className="mb-5 categories-card">
                    {allCategories.map((item) => (
                        <Card className="text-center mb-2">
                            <Card.Img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                            <Card.ImgOverlay className='d-flex justify-content-center align-items-center'>
                                <Card.Title>{item.category}</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    ))}
                </div>

                {/* New Recipes */}
                <Card className='categories-title flex-row justify-content-between align-items-center my-4'>
                    <Card.Title className='fw-bolder fs-4'>Cobain Resep Terbaru</Card.Title>
                    <Button>Lihat Semua</Button>
                </Card>

                <Row xs={1} sm={2} md={4} className="g-4 mb-5">
                    {higlightRecipe.map((item) => (
                        <Col>
                            <Card className='highlight-recipe-card'>
                                <Card.Img variant="top" src={item.thumb} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text className='mt-auto'>
                                        <IoTime /> {item.times} <IoFastFood /> {item.portion}
                                    </Card.Text>
                                    <Card.Text><IoCellular /> {item.dificulty}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}
