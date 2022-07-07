import React from 'react'
import { Card, Container } from 'react-bootstrap'

export default function NotFound() {
    return (
        <Container className='page-not-found text-center my-5'>
            <Card>
                <Card.Img src="./images/notfound.png" alt="Card image" />
                <Card.Body>
                    <Card.Title className='fw-bold fs-1'>Ooops...</Card.Title>
                    <Card.Text>
                        Halaman belum tersedia untuk saat ini. Klik tombol dibawah untuk melanjutkan perjalanan kembali.
                    </Card.Text>
                    <a href='/' className='btn btn-primary'>Halaman Utama</a>
                </Card.Body>
            </Card>
        </Container>
    )
}
