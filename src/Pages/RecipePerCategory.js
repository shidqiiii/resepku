import React, { useContext, useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { IoCellular, IoFastFood, IoTime } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { BaseApi } from '../Api/BaseApi';
import Loading from '../Components/Loading';
import { categoriesContext } from '../Context/categoriesContext';

const RecipePerCategory = () => {
    const { key } = useParams();
    const allCategories = useContext(categoriesContext);

    const getCategory = () => {
        return allCategories.find(item =>
            item.key === key
        )
    }

    const getRecipePerCategories = async (key) => {
        const data = await BaseApi.recipesByCategory(key);
        if (data.status === true) {
            setrecipePerCategories(data.results);
        }
    }

    const [recipePerCategories, setrecipePerCategories] = useState(null);

    useEffect(() => {
        getRecipePerCategories(key);
    }, []);

    const navigate = useNavigate();

    const navigateToRecipeDetail = (key) => {
        navigate(`/resep/${key}`);
    };


    return (
        <div className='recipe-per-categories'>
            {console.log(getCategory())}
            {getCategory() !== undefined && recipePerCategories !== null ?
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
                                        <Card className='recipe-card'
                                            onClick={() => navigateToRecipeDetail(item.key)}>
                                            <Card.Img variant="top" src={item.thumb} />
                                            <Card.Body>
                                                <Card.Text className='mini-text'>
                                                    <IoTime /> {item.times} <IoFastFood /> {item.portion} <IoCellular /> {item.dificulty}
                                                </Card.Text>
                                                <Card.Title className='my-2 fw-bold'>{item.title}</Card.Title>
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
                    <Loading />
                )
            }

        </div>
    );
}

export default RecipePerCategory;
