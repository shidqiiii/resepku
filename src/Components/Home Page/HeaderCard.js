import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'

export default function Header(props) {
    return (
        <Card className='header'>
            <Card.Img src="./images/header.png" alt="Card image" />
            <Card.ImgOverlay className='d-flex align-items-center justify-content-center text-center'>
                <Container className='px-5'>
                    <Card.Title className='fs-2 text-uppercase fw-bolder'>Mau Masak Apa Hari ini?</Card.Title>
                    <Card.Text className='fs-5'>
                        Jelajahi ratusan resep terbaik dari seluruh dunia, <br /> dan nikmati seni dalam memasak!
                    </Card.Text>
                    <Form className="d-flex justify-content-center"
                        onSubmit={props.handleSubmit}>
                        <Form.Control
                            type="search"
                            placeholder="Cari resep terbaru"
                            onChange={props.handleChange}
                        />
                        <Button type='submit'>Search</Button>
                    </Form>
                </Container>
            </Card.ImgOverlay>
        </Card>
    )
}
