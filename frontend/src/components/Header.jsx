import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <Navbar className="custom-navbar" expand="md" data-bs-theme="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white fw-bold">
          <img
            src={logo}
            alt="ProShop Logo"
            style={{ height: '40px', width: '60px', marginRight: '5px' }}
          />
          ProShop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cart" className="text-white">
              <FaShoppingCart style={{ marginRight: '5px' }} />
              Cart
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-white">
              <FaUser style={{ marginRight: '5px' }} />
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
