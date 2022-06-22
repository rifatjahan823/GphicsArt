import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from  '../../../Image/home/logo.png'
import './Navebar.css'

const Navebar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' className='menu border-bottom'>
                <Container fluid className='px-4'>
                    <Navbar.Brand as={Link} to="/">
                    <img className='logo' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link as={Link} to="/howitswork">How Its Work</Nav.Link>
                        <Nav.Link as={Link} to="/review">Review</Nav.Link>
                        <Nav.Link as={Link} to="/aboutus">About US</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/signin">Login</Nav.Link>
                        <Nav.Link className='signup' as={Link} to="/signup">Register</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </>
    );
};

export default Navebar;