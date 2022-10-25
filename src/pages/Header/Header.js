import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";



const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
           
              <Nav.Link><Link>Home</Link></Nav.Link>
              <Nav.Link><Link>Our Courses</Link></Nav.Link>
              <Nav.Link><Link>Faq</Link></Nav.Link>
              <Nav.Link><Link>Blog</Link></Nav.Link>
              <Nav.Link><Link>Contact</Link></Nav.Link>
              <Link>Log in</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;           