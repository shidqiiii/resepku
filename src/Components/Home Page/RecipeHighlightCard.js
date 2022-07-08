import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

export default function RecipeHighlightCard(props) {
    return (
        <Card className='highlight-recipe-component'>
            <Row className="m-2 g-0">
                <Col md={4} className='d-flex align-items-center'>
                    <Card.Img src={props.detailRecipe.thumb} className="img-fluid rounded-start" alt="foto makanan" />
                </Col>
                <Col className='d-flex align-items-center ms-3'>
                    <Card className='highlight-recipe-card'>
                        <Card.Body>
                            <Card.Title className='fw-bolder fs-5'>{props.detailRecipe.title}</Card.Title>
                            <Card.Text className='my-1'><small>{props.detailRecipe.author.datePublished} oleh {props.detailRecipe.author.user}</small></Card.Text>
                            <Card.Text>{props.detailRecipe.desc}</Card.Text>
                            <Button onClick={
                                () => props.navigateToRecipeDetail("resep-roti-goreng-isi-tempe-lada-hitam", "detail")}>Cek Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Card>
    )
}
