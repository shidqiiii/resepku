import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { BaseApi } from '../Api/BaseApi';
import { IoFastFood, IoTime, IoCellular } from 'react-icons/io5';
import { CategoriesContext } from '../Context/Context';

export default function Home() {
    const getHiglightRecipe = async () => {
        const data = await BaseApi.higlightRecipe();
        if (data.status === true) {
            setHiglightRecipe(data.results)
        }
    };

    const getRecipeRotiGoreng = async () => {
        const data = await BaseApi.detailRecipe("resep-roti-goreng-isi-tempe-lada-hitam");
        if (data.status === true) {
            setDetailRecipe(data.results)
        }
    };

    const [higlightRecipe, setHiglightRecipe] = useState([]);
    const [detailRecipe, setDetailRecipe] = useState([]);

    useEffect(() => {
        getHiglightRecipe()
        getRecipeRotiGoreng()
    }, []);

    const categories = useContext(CategoriesContext);

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
                <div className="categories-component">
                    <Card.Title className='fw-bolder fs-4 my-4'>Berdasarkan Kategori</Card.Title>
                    <div className="mb-5 categories-card">
                        {categories.map((item) => (
                            <Card className="text-center mb-2" key={item.key}>
                                <Card.Img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                                <Card.ImgOverlay className='d-flex justify-content-center align-items-center'>
                                    <Card.Title>{item.category}</Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* New Recipes */}
                <div className="new-recipe-component">
                    <Card className='categories-title flex-row justify-content-between align-items-center my-4'>
                        <Card.Title className='fw-bolder fs-4'>Cobain Resep Terbaru</Card.Title>
                        <Button>Lihat Semua</Button>
                    </Card>

                    <Row xs={1} sm={2} md={4} className="g-4 mb-5">
                        {higlightRecipe.map((item) => (
                            <Col key={item.key}>
                                <Card className='new-recipe-card'>
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
                </div>

                {/* Recipe Highlight */}
                {detailRecipe.length !== 0 ? (<Card className='highlight-recipe-component'>
                    <Row className="m-2 g-0">
                        <Col md={4} className='d-flex align-items-center'>
                            <Card.Img src={detailRecipe.thumb} className="img-fluid rounded-start" alt="foto makanan" />
                        </Col>
                        <Col className='d-flex align-items-center ms-3'>
                            <Card className='highlight-recipe-card'>
                                <Card.Body>
                                    <Card.Title className='fw-bolder fs-5'>{detailRecipe.title}</Card.Title>
                                    <Card.Text className='my-1'><small>{detailRecipe.author.datePublished} oleh {detailRecipe.author.user}</small></Card.Text>
                                    <Card.Text>{detailRecipe.desc}</Card.Text>
                                    <Button>Cek Detail</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card>) : ("")}

                {/* newsletter */}
                <Card className="text-center my-5 newsletter">
                    <Card.Body>
                        <Card.Title className='mt-3 mb-0'>Bergabunglah dengan Buletin Kami</Card.Title>
                        <Card.Text className='mb-4'>Terima Update Resep & Artikel Masakan Terbaru</Card.Text>
                        <Form className="d-flex justify-content-center mb-4 mx-3">
                            <Form.Control
                                type="email"
                                placeholder="Email anda"
                            />
                            <Button>Kirim</Button>
                        </Form>
                    </Card.Body>
                </Card>

            </Container>
        </>
    )
}
