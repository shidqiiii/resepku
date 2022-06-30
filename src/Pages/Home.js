import React, { useState, useEffect } from 'react'
import { Container, Carousel } from 'react-bootstrap';
import { BaseApi } from '../Api/BaseApi';

export default function Home() {
    const getCategory = async () => {
        const data = await BaseApi.higlightRecipe();
        if (data.status === true) {
            setAllCategories(data.results)
        }

    };

    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        getCategory()
    }, []);

    return (
        <Container className='mt-5'>
            <Carousel>
                {allCategories.map((item) => {
                    return (
                        <Carousel.Item interval={1500} key={item.key}>
                            <img
                                className="d-block w-100"
                                src={item.thumb}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </Container>
    )
}
