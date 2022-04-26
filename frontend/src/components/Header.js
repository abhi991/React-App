import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Ganpati</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link as = {Link} to="/login">
                            <i className='fas fa-user'></i>
                            Sign In
                        </Nav.Link>
                        <Nav.Link as = {Link} to="/cart">
                            <i className='fas fa-shopping-cart'></i>
                            Cart
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header