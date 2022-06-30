import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'

export default function NavigationBar() {
    return (
        <Navbar expand="lg" className='shadow py-2' sticky="top" bg='light'>
            <Container >
                <Navbar.Brand href="#home">Resep<span>ku</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Categories</Nav.Link>
                        <Nav.Link href="#">Products</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Button variant='light' className='mx-2 login'>Login</Button>
                        <Button className='mx-2 signup'>Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar>
    )
}
