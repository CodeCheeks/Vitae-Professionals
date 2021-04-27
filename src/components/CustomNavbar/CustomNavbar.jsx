import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/AccessTokenStore'
import "./CustomNavbar.css"


const CustomNavbar = (user) => {

    return (
        <div className='CustomNavbar'>
            <Navbar className="color__nav" expand="lg" fixed="top">
            <Navbar.Brand>
                <NavLink className='link__style logo__wrapper'to="/personal-area">
                    <img src="https://pics.freeicons.io/uploads/icons/png/18081978721600459989-512.png" width="30" height="30" className="d-inline-block align-top mx-3" alt="vitae-logo"/>
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Enfermería</Nav.Link>
                    <Nav.Link href="#link">Medicina</Nav.Link>
                    <Nav.Link href="#link">Fisioterapia</Nav.Link>
                    <Nav.Link href="#link">Terapia Ocupacional</Nav.Link>
                    <Nav.Link href="#link">Trabajo social</Nav.Link>
                    <Nav.Link href="#link">Animación</Nav.Link>
                </Nav>
                <Navbar.Text>
                  Usuario: <a href="#login">{user.firstname}</a>
                </Navbar.Text>
                <div className="mx-3">
                    <Nav.Link href="/login" onClick={logout}>Cerrar sesión</Nav.Link>
                </div>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default CustomNavbar;