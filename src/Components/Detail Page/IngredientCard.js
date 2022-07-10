import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export default function IngredientCard(props) {
    return (
        <div className='card-ingredient'>
            <div className='mb-5'>
                <Card.Title className='my-4 fw-bold'>Bahan yang Diperlukan</Card.Title>
                <Row xs={1} md={2} className="g-3 mx-5">
                    {props.recipeDetail.ingredient.map(item => (
                        <Col key={item}>
                            <Card.Text>{item}</Card.Text>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className='mx-5'>
                <Card.Title className='my-4 fw-bold'>Cara Memasak</Card.Title>
                {props.recipeDetail.step.map(item => (
                    <Card.Text key={item}>{item}</Card.Text>
                ))}
            </div>
        </div>
    )
}
