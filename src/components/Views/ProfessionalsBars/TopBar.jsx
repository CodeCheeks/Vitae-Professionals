import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown, FormControl, Form, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext';
import "./TopBar.css"
const TopBar = () => {

    const { user } = useContext(UserContext);
    return (
        <div className='TopBar'>
            <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand href="#home" className='mx-5'><h4>Bienvenido {user.firstname}</h4></Navbar.Brand>
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
                <div>
                <Nav.Link href="#home">Logout</Nav.Link>
                </div>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default TopBar;