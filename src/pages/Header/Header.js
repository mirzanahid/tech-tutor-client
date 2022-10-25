import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const Header = () => {
  const { user } = useContext(AuthContext);


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand ><Link to={'/'}>technext institute</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Link to={'/'}>Home</Link>
            <Link to={'/courses'}>Our Courses</Link>
            <Link to={'/faq'}>Faq</Link>
            <Link to={'/blog'}>Blog</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/login'}>Log in</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;           