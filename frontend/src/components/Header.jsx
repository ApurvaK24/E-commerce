import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import './Header.css';
import logo from '../assets/logo.png'; 

const Header = () =>{
return(
    <Navbar className="custom-navbar" expand="md" data-bs-theme="dark" collapseOnSelect>
        <Container>
            <Navbar.Brand href="/" className="text-white fw-bold"><img src={logo} style={{ height: '40px', width: '60px', marginRight:'5px' }} /> ProShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/cart" className="text-white"><FaShoppingCart />Cart</Nav.Link>
                    <Nav.Link href="/login" className="text-white"><FaUser />Sign In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)
}
export default Header;
