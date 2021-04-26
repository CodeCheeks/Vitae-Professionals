import React, { useContext } from 'react';
import './ElderProfile.css'
import { useParams } from 'react-router';
import { ElderContext } from "../../../../contexts/ElderContext"
import LateralBar from '../../ProfessionalsBars/LateralBar';
import {groupColor} from '../../Elders/EldersList/EldersList'
import { NavLink } from 'react-router-dom';

const ElderProfile = () => {
    const {id} = useParams()
    const { elders } = useContext(ElderContext)

    const selectedElder = elders.find(eld => eld.id === id.toString())
    
    
    const {firstname, lastname, gender, dateOfBirth, address, group, diet, relative, therapies} = selectedElder

    const groupColor = (group) => {
        if(group === 'Rojo'){
            return 'col-1 list__items red'
        }else if(group === 'Naranja'){
            return 'col-1 list__items orange'  
        }else{
            return 'col-1 list__items green' 
        }
    }

    return (
        <div className='ElderProfile'>
            <div className="container-fluid p__area__wrapper">
                <LateralBar/> 
                <div className="container px-1 py-3 border">
                    <div className="row mx-5">
                        <div className="col-6">
                            <img src="http://via.placeholder.com/150" alt=""/>
                            <div className="col-12 my-2">
                                <h1>{firstname} {lastname}</h1>
                            </div>
                        </div>
                            <div className="col-3 d-flex flex-column justify-content-center align-items-start">
                                <h6 >Grupo:<span className={groupColor(group)}>{group}</span> </h6>
                                <h6 >Género: {gender} </h6>
                                <h6>Fecha de nacimiento: </h6>
                                <h6>{dateOfBirth.split('T')[0].split("-").reverse().join("-")}</h6>
                                
                            </div>
                            <div className="col-3 d-flex flex-column justify-content-center align-items-start">
                                <h6>Dieta: {diet}</h6>
                                <h6 >Dirección: {address} </h6>
                                <h6 >Familiar: {relative.firstname} </h6>
                                <h6>Contactar: {relative.phonenumber}</h6>
                            </div>
                        
                    </div>
                    <div className="container px-1 py-3 border d-flex justify-content-center">
                        <div className='d-flex flex-column justify-content-center align-items-left btns__wrapper'>
                       <NavLink to="#" className='py-2 my-3 btn-primary'>Nuevo informe +</NavLink>
                       <NavLink to="#" className='py-2 my-3 btn-primary'>Ver informes</NavLink>
                       <NavLink to="#" className='py-2 my-3 btn-primary' therapies = {therapies}>Ver actividades</NavLink> 
                       <NavLink to="#" className='py-2 my-3 btn-primary'>Enviar mensaje a {relative.firstname} </NavLink>
                       <NavLink to="#" className='py-2 my-3 btn-primary'>Añadir imagenes </NavLink> 
                    </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ElderProfile;