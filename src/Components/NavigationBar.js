import React, { useContext } from 'react'
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CategoriesContext } from '../Context/Context';

export default function NavigationBar(props) {
    const categories = useContext(CategoriesContext);

    const getRecipePerCategories = (key, category) => {
        props.getRecipePerCategories(key, category)
    }

    return (
        <Navbar expand="lg" className='shadow py-2' sticky="top" bg='light'>
            <Container >
                <Navbar.Brand as={Link} to="/">Resep<span>ku</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Kategori" id="basic-nav-dropdown">
                            {categories.map((item => (
                                <NavDropdown.Item
                                    as={Link}
                                    to={`/kategori/${item.key}`}
                                    key={item.key}
                                    onClick={() => getRecipePerCategories(item.key, item.category)}
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
