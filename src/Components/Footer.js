import React from 'react'
import { Card, Container } from 'react-bootstrap';
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from 'react-icons/io5';

export default function Footer() {
    return (
        <Container className="footer pb-3">
            <hr />
            <div className='d-flex justify-content-between align-items-center'>
                <Card.Text className='m-0'>&copy; Arunika | All Rights Reserved</Card.Text>
                <div>
                    <IoLogoInstagram className='me-1' />
                    <IoLogoFacebook className='mx-1' />
                    <IoLogoTwitter className='ms-1' />
                </div>
            </div>
        </Container>
    )
}
