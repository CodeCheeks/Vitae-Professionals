import React from 'react';
import { Navbar, Nav, Form} from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { logout } from '../../store/AccessTokenStore'
import "./CustomNavbar.css"
import { useForm } from "react-hook-form";
import { getElderByName } from '../../services/ElderService';
import { Next } from 'react-bootstrap/esm/PageItem';


const CustomNavbar = (user) => {
    const { register, handleSubmit, reset } = useForm({ defaultValues: { elder: "" } });
    let history = useHistory();
    const onSubmit = (data) => {
        reset({ elder: '' })
        getElderByName(data.elder)
        .then(res => history.push(`/elders/${res.id}/`) )
        .catch(e => Next(e))
    }

    return (
        <div className='CustomNavbar'>
            <Navbar className="color__nav" expand="lg" fixed="top">
            <Navbar.Brand>
                <NavLink className='link__style logo__wrapper'to="/personal-area">
                    <img src="https://pics.freeicons.io/uploads/icons/png/18081978721600459989-512.png" width="40" height="40" className="d-inline-block align-top mx-3" alt="vitae-logo"/>
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/personal-area/enfermeria" className="mx-3 menu__item">Enfermería</NavLink>
                    <NavLink to="/personal-area/medicina" className="mx-3 menu__item">Medicina</NavLink>
                    <NavLink to="/personal-area/fisioterapia" className="mx-3 menu__item">Fisioterapia</NavLink>
                    <NavLink to="/personal-area/psicología" className="mx-3 menu__item">Psicología</NavLink>
                    <NavLink to="/personal-area/terapia-ocupacional" className="mx-3 menu__item">Terapia Ocupacional</NavLink>
                    <NavLink to="/personal-area/trabajo-social" className="mx-3 menu__item">Trabajo social</NavLink>
                    <NavLink to="/personal-area/animación" className="mx-3 menu__item">Animación</NavLink>


                    

                </Nav>
                <Navbar.Text>
                  Usuario: <a className="user__style" href="#login">{user.firstname}</a>
                </Navbar.Text>
                <div className="mx-5">
                    <NavLink className="menu__item" to="/login" onClick={logout}>Cerrar sesión</NavLink>
                </div>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default CustomNavbar;