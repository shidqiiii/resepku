import React, { useContext, useEffect, useState } from 'react';
import { Card, Container, Row, Col, Spinner } from 'react-bootstrap';
import { IoCellular, IoFastFood, IoTime } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import { BaseApi } from '../Api/BaseApi';
import { categoriesContext } from '../Context/categoriesContext';

const RecipePerCategory = () => {
    const { key } = useParams();
    const allCategories = useContext(categoriesContext);

    const getCategory = () =>
        allCategories.find(item => (
            item.key === key
        ))

    const getRecipePerCategories = async (key) => {
        const data = await BaseApi.recipesByCategory(key);
        if (data.status === true) {
            setrecipePerCategories(data.results);
        }
    }

    const [recipePerCategories, setrecipePerCategories] = useState([]);

    useEffect(() => {
        getRecipePerCategories(`${key}`);
    }, []);


    return (
        <div className='recipe-per-categories'>
            {/* {console.log(getCategory())} */}
            {getCategory() !== undefined && recipePerCategories !== undefined ?
                (
                    <>
                        <Card className="bg-dark text-white text-center card-header-recipe-per-category">
                            <Card.Img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80" alt="Card image" />
                            <Card.ImgOverlay className='d-flex justify-content-center align-items-center flex-column'>
                                <Card.Title className='fw-bold fs-1'>{getCategory().category}</Card.Title>
                                <Card.Text>
                                    Jadikan harimu lebih berenergi dengan menu {getCategory().category} yang tepat. Pilihan resep {getCategory().category} ini praktis dibuat meski waktumu terbatas. Yuk, kita coba!
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>

                        <Container className="mt-5">
                            <Row xs={1} sm={2} lg={3} className="g-5 mb-5">
                                {recipePerCategories.map((item) => (
                                    <Col key={item.key}>
                                        <Card className='recipe-card'>
                                            <Card.Img variant="top" src={item.thumb} />
                                            <Card.Body>
                                                <Card.Text>
                                                    <IoTime /> {item.times} <IoFastFood /> {item.portion} <IoCellular /> {item.dificulty}
                                                </Card.Text>
                                                <Card.Text>{item.title}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </>
                )
                :
                (
                    <div className='d-flex my-5 justify-content-center'>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                )
            }

        </div>
    );
}

export default RecipePerCategory;