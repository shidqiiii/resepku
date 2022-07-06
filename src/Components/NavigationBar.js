import React, { useContext } from 'react'
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { categoriesContext } from '../Context/categoriesContext';

export default function NavigationBar() {
    const allCategories = useContext(categoriesContext);

    return (
        <Navbar expand="lg" className='shadow py-2' sticky="top" bg='light'>
            <Container >
                <Navbar.Brand href="/">Resep<span>ku</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Kategori" id="basic-nav-dropdown">
                            {allCategories.map((item => (
                                <NavDropdown.Item
                                    href={`/kategori/${item.key}`}
                                    key={item.key}
                                >{item.category}</NavDropdown.Item>
                            )))}
                        </NavDropdown>
                        <Nav.Link as={Link} to="/artikel">Artikel</Nav.Link>
                        <Nav.Link as={Link} to="#">Produk</Nav.Link>
                        <Nav.Link as={Link} to="#">Favorit</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Button variant='light' className='mx-1 login'>Masuk</Button>
                        <Button className='mx-1 signup'>Daftar</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}
