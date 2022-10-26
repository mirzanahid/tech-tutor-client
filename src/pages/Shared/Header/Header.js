import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css';
import logo from '../../../assets/logo6.svg'



const Header = () => {
  const { user } = useContext(AuthContext);


  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand ><Link to={'/'}> <img className='tutor-logo' src={logo} alt="logo" /> </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Link className='nav-item' to={'/'}>Home</Link>
            <Link className='nav-item' to={'/courses'}>Our Courses</Link>
            <Link className='nav-item' to={'/faq'}>Faq</Link>
            <Link className='nav-item' to={'/blog'}>Blog</Link>
            <Link className='nav-item' to={'/contact'}>Contact</Link>
            <Link className='nav-item' to={'/login'}>Log in</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;           