import React from 'react'
import { Card, Container } from 'react-bootstrap'

export default function NotFound() {
    return (
        <Container className='page-under-construction text-center my-5'>
            <Card>
                <Card.Img src="./images/UnderConst.png" alt="Card image" />
                <Card.Body>
                    <Card.Title className='fw-bold fs-1'>Ooops...</Card.Title>
                    <Card.Text>
                        Mohon Maaf, Halaman ini sedang dalam perbaikan. Klik tombol dibawah untuk melanjutkan Perjalanan.
                    </Card.Text>
                    <a href="/" className='btn'>Halaman Utama</a>
                </Card.Body>
            </Card>
        </Container>
    )
}
