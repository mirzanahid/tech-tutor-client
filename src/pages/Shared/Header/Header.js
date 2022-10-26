import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css';
import logo from '../../../assets/logo6.svg'
import avatar from '../../../assets/avatar.svg'
import { Button } from 'react-bootstrap';



const Header = () => {
  const { user, logout } = useContext(AuthContext);




  return (
    <Navbar className='navbar' expand="lg">
      <Container>
        <Navbar.Brand ><Link to={'/'}> <img className='tutor-logo' src={logo} alt="logo" /> </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">

            <Link className='nav-item' to={'/'}>Home</Link>
            <Link className='nav-item' to={'/courses'}>Our Courses</Link>
            <Link className='nav-item' to={'/faq'}>Faq</Link>
            <Link className='nav-item' to={'/blog'}>Blog</Link>
            <Link className='nav-item' to={'/contact'}>Contact</Link>
            {
              user?.uid ?
                <div className='profile'>
                  <img src={user?.photoURL || avatar} alt="profile-image" />
                  <div className="profile-popup-main">
                    <div className="profile-popup">
                      <div className="profile-info-container">
                        <div className="inner-profile">
                          <img src={user?.photoURL || avatar} alt="profile-image" />
                        </div>
                        <div className="profile-info">
                          <h4 className='profile-name'>{user?.displayName || 'User Name'}</h4>
                          <p className='profile-email'>{user?.email}</p>
                          <Link className='profile-visit' to={'/profile'}>Visit Account</Link>
                        </div>
                      </div>
                      <Link onClick={logout} to={'/login'} className='signout-btn'>Sign Out</Link>
                    </div>
                  </div>
                </div>
                :
                <Link className='nav-item' to={'/login'}>Log in</Link>
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;           