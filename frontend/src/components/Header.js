import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Image, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { logout } from '../actions/userActions';
const Header = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" >
                    <Image className='img-responsive' style={{height:"5rem" } } src = "./images/logo.png"/>
                    Ganpati
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to ='/profile'>
                                    <NavDropdown.Item>
                                        Profile
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ): <Nav.Link as = {Link} to="/login">
                        <i className='fas fa-user'></i>
                        Sign In
                    </Nav.Link>}

                    <Nav.Link as={Link} to="/cart">
                        <i className='fas fa-shopping-cart'></i>
                        Cart
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </header >
    )
}

export default Header