import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { IoCellular, IoFastFood, IoTime } from 'react-icons/io5'

export default function RecipeCategoryCard(props) {
    return (
        <div className="new-recipe-component">
            <Card className='categories-title flex-row justify-content-between align-items-center my-4'>
                <Card.Title className='fw-bolder fs-4'>Cobain Resep Terbaru</Card.Title>
                <Button>Lihat Semua</Button>
            </Card>

            <Row xs={1} sm={2} md={4} className="g-4 mb-5">
                {props.higlightRecipe.map((item) => (
                    <Col key={item.key}>
                        <Card className='new-recipe-card text-center'
                            onClick={() => props.navigateToRecipeDetail(item.key, "detail")}>
                            <Card.Img variant="top" src={item.thumb} />
                            <Card.Body>
                                <Card.Title className='fw-bold'>{item.title}</Card.Title>
                                <hr className='my-2' />
                                <Row>
                                    <Col>
                                        <small><IoTime /></small>
                                    </Col>
                                    <Col>
                                        <small><IoFastFood /></small>
                                    </Col>
                                    <Col>
                                        <small><IoCellular /></small>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Card.Text>{item.times}</Card.Text>
                                    </Col>
                                    <Col>
                                        <Card.Text>{item.portion}</Card.Text>
                                    </Col>
                                    <Col>
                                        <Card.Text>{item.dificulty}</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
