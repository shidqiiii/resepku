import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

export default function Newsletter() {
    return (
        <Card className="text-center my-5 newsletter">
            <Card.Body>
                <Card.Title className='mt-3 mb-2'>Bergabunglah dengan Buletin Kami</Card.Title>
                <Card.Text className='mb-4'>Terima Update Resep & Artikel Masakan Terbaru</Card.Text>
                <Form className="d-flex justify-content-center mb-4 mx-3">
                    <Form.Control
                        type="email"
                        placeholder="Email anda"
                    />
                    <Button>Kirim</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
