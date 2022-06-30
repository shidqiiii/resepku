import React, { useState, useEffect } from 'react'
import { Container, Carousel } from 'react-bootstrap';
import { BaseApi } from '../Api/BaseApi';
import { IoFastFood, IoTime, IoCellular } from 'react-icons/io5';


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
                        <Carousel.Item interval={1500} key={item.key}
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
        </Container>
    )
}
