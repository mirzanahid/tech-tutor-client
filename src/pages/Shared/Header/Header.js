import React from 'react';
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



const Header = () => {
  const { user, logout } = useContext(AuthContext);

  console.log(user)


  return (
    <Navbar className='navbar' expand="lg">
      <Container>
        <Navbar.Brand ><Link to={'/'}> <img className='tutor-logo' src={logo} alt="logo" /> </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center justify-content-between nav">

            <Link className='nav-item text-color8' to={'/'}>Home</Link>
            <Link className='nav-item text-color8' to={'/courses'}>Our Courses</Link>
            <Link className='nav-item text-color8' to={'/faq'}>Faq</Link>
            <Link className='nav-item text-color8' to={'/blog'}>Blog</Link>
            <Link className='nav-item text-color8' to={'/contact'}>Contact</Link>
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
                          <Link className='profile-visit' to={'/profile'}>Visit Account</Link>
                        </div>
                      </div>
                      <Link onClick={logout} to={'/login'} className='signout-btn'>Sign Out</Link>
                    </div>
                  </div>
                </div>
                :
                <Link className='nav-item-btn bg-color text-color3' to={'/login'}>Log in</Link>

            }
         
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;           