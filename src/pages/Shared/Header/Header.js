import React, { useState } from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css';
import logo from '../../../assets/logo.svg'
import avatar from '../../../assets/avatar.svg'
import Toggle from '../Toggle/Toggle';
import { NavLink } from 'react-bootstrap';



const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [expanded, setExpanded] = useState(false);

  const logoutExpanded = () => {
    logout();
    setExpanded(false);
  }


  return (
    <Navbar expanded={expanded} sticky="top" className='navbar' expand="lg">
      <Container>
        <Navbar.Brand ><Link to={'/'}> <img className='tutor-logo' src={logo} alt="logo" /> </Link></Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center justify-content-between nav">
            <Link onClick={() => setExpanded(false)} className='nav-item sub-heading active text-color8' to={'/'}>Home</Link>
            <Link onClick={() => setExpanded(false)} className='nav-item sub-heading text-color8' to={'/courses'}>Our Courses</Link>
            <Link onClick={() => setExpanded(false)} className='nav-item sub-heading text-color8' to={'/faq'}>Faq</Link>
            <Link onClick={() => setExpanded(false)} className='nav-item sub-heading text-color8' to={'/blog'}>Blog</Link>
          </Nav>
          <div className="right d-flex align-items-center">
            <Toggle></Toggle>
            {
              user?.uid ?
                <div className='profile'>
                  <img src={user?.photoURL || avatar} alt="profile-image" />
                  <div className="profile-popup-main">
                    <div className="profile-popup bg-color2">
                      <div className="profile-info-container">
                        <div className="inner-profile">
                          <img src={user?.photoURL || avatar} alt="profile-image" />
                        </div>
                        <div className="profile-info">
                          <h4 className='profile-name'>{user?.displayName || 'User Name'}</h4>
                          <p className='profile-email'>{user?.email}</p>
                          <Link onClick={() => setExpanded(false)} className='profile-visit' to={'/profile'}>Visit Account</Link>
                        </div>
                      </div>
                      <Link onClick={logoutExpanded} to={'/login'} className='signout-btn'>Sign Out</Link>
                    </div>
                  </div>
                </div>
                :
                <Link onClick={() => setExpanded(false)} className='nav-item-btn bg-color text-color3' to={'/login'}>Log in</Link>
            }
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;           