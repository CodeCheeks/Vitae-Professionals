import React, { useContext } from 'react';
import './ElderProfile.css'
import { useParams } from 'react-router';
import { ElderContext } from "../../../../contexts/ElderContext"
import { Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ElderProfile = () => {
    const {id} = useParams()
    const { elders } = useContext(ElderContext)
    let selectedElder={};

    elders ? 
     selectedElder = elders.find(eld => eld.id === id.toString())
    :
    <Spinner className="m-5" animation="border" role="status" variant="info">
        <span className="sr-only">Loading...</span>
    </Spinner>
    
    
    const {firstname, lastname, gender, dateOfBirth, address, group, diet, relative, therapies, profilepicture, age} = selectedElder

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
            {elders ? 
            <div className="container-fluid p__area__wrapper">
                <div className="container px-1 py-3 border">
                    <div className="row">
                        <div className="col-4">
                            <img src={profilepicture} width="150px" alt="avatar"/>
                            <div className="col-12 my-2">
                                <h1>{firstname} {lastname}</h1>
                            </div>
                        </div>
                            <div className="col-3 d-flex flex-column justify-content-center align-items-start">
                                <h6 >Grupo:<span className={groupColor(group)}>{group}</span> </h6>
                                <h6 >Género: {gender} </h6>
                                <h6>Nacimiento: {dateOfBirth.split('T')[0].split("-").reverse().join("-")} </h6>
                                <h6>Edad: {age}</h6>
                            </div>
                            <div className="col-5 d-flex flex-column justify-content-center align-items-start">
                                <h6><img className="mx-1" src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619546680/Vitae/iconos/food_dt4d5r.png" alt="" width="25"/> Dieta: {diet}</h6>
                                <h6><img className="mx-1" src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619546183/Vitae/iconos/pngwing.com_afyg5o.png" alt="" width="25"/>Dirección: {address} </h6>
                                <h6><img className="mx-1" src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619546583/Vitae/iconos/klipartz.com_p3aao4.png" alt="" width="25"/>Familiar: {relative.firstname} </h6>
                                <h6><img className="mx-1" src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619547020/Vitae/iconos/klipartz.com_1_zf01wx.png" alt="" width="25"/>Contactar: {relative.phonenumber}</h6>
                            </div>
                        
                    </div>
                        <div className="container px-1 py-3 border d-flex justify-content-center">
                            <div className='d-flex flex-column justify-content-center align-items-left btns__wrapper'>
                                <NavLink to={`/elders/${id}/add-reports`} className='py-2 my-3 btn-primary'>Añadir informe</NavLink>
                                <NavLink to={`/elders/${id}/reports`} className='py-2 my-3 btn-primary'>Ver informes</NavLink>
                                <NavLink to={`/elders/${id}/actividades`} className='py-2 my-3 btn-primary' therapies = {therapies}>Ver actividades</NavLink> 
                                <NavLink to="#" className='py-2 my-3 btn-primary'>Enviar mensaje a {relative.firstname} </NavLink>
                                <NavLink to="#" className='py-2 my-3 btn-primary'>Añadir imagenes </NavLink> 
                            </div>
                        
                    </div>
                    
                </div>
            </div>
            :
            <Spinner className="m-5" animation="border" role="status" variant="info">
            <span className="sr-only">Loading...</span>
            </Spinner>}
        </div>
        
    
    );
};

export default ElderProfile;