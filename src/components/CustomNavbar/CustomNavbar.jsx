import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/AccessTokenStore'
import "./CustomNavbar.css"


const CustomNavbar = () => {

    return (
        <div className='CustomNavbar'>
            <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand>
                <NavLink className='link__style logo__wrapper'to="/personal-area">
                    <img src="https://pics.freeicons.io/uploads/icons/png/18081978721600459989-512.png" width="30" height="30" className="d-inline-block align-top mx-3" alt="vitae-logo"/>
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                </Nav>
                <div>
                <Nav.Link href="/login" onClick={logout}>Logout</Nav.Link>
                </div>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default CustomNavbar;