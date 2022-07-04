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
                        <Nav.Link href="#">Kategori</Nav.Link>
                        <Nav.Link href="#">Artikel</Nav.Link>
                        <Nav.Link href="#">Produk</Nav.Link>
                        <Nav.Link href="#">Favorit</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Button variant='light' className='mx-1 login'>Masuk</Button>
                        <Button className='mx-1 signup'>Daftar</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar>
    )
}
