import React from 'react';
import { Navbar, Nav, Form, Button} from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { logout } from '../../store/AccessTokenStore'
import "./CustomNavbar.css"
import { useForm } from "react-hook-form";
import { getElderByName } from '../../services/ElderService';
import { Next } from 'react-bootstrap/esm/PageItem';


const CustomNavbar = (user) => {
    const { register, handleSubmit } = useForm();
    let history = useHistory();
    const onSubmit = (data) => {
        getElderByName(data.elder)
        .then(res => history.push(`/elders/${res.id}/`) )
        .catch(e => Next(e))
    }

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
                    <NavLink to="/personal-area/enfermeria" className="mx-3 menu__item">Enfermería</NavLink>
                    <NavLink to="/personal-area/medicina" className="mx-3 menu__item">Medicina</NavLink>
                    <NavLink to="/personal-area/fisioterapia" className="mx-3 menu__item">Fisioterapia</NavLink>
                    <NavLink to="/personal-area/psicología" className="mx-3 menu__item">Psicología</NavLink>
                    <NavLink to="/personal-area/terapia-ocupacional" className="mx-3 menu__item">Terapia Ocupacional</NavLink>
                    <NavLink to="/personal-area/trabajo-social" className="mx-3 menu__item">Trabajo social</NavLink>
                    <NavLink to="/personal-area/animación" className="mx-3 menu__item">Animación</NavLink>


                    <Form onSubmit={handleSubmit(onSubmit)} className="mx-5">
                        <div className="row">
                            <div className="col">
                                <Form.Group controlId="elderName">
                                    <Form.Control size="sm" type="string" placeholder="Buscar" {...register("elder", { required: true })}/>
                                </Form.Group>
                            </div>
                            <div className="col">
                                <Button size="sm" variant="info" type="submit">Submit</Button>
                            </div>
                        </div>
                    </Form>

                </Nav>
                <Navbar.Text>
                  Usuario: <a href="#login">{user.firstname}</a>
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