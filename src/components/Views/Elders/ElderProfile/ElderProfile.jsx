import React, { useContext } from 'react';
import './ElderProfile.css'
import { useParams } from 'react-router';
import { ElderContext } from "../../../../contexts/ElderContext"
import LateralBar from '../../ProfessionalsBars/LateralBar';
import TopBar from '../../ProfessionalsBars/TopBar';
import {groupColor} from '../../Elders/EldersList/EldersList'

const ElderProfile = () => {
    const {id} = useParams()
    const { elders } = useContext(ElderContext)

    const selectedElder = elders.find(eld => eld.id === id.toString())
    
    
    const {firstname, lastname, gender, dateOfBirth, adress, group, diet, relative, therapies} = selectedElder

    const groupColor = (group) => {
        if(group === 'red'){
            return 'col-1 list__items red'
        }else if(group === 'orange'){
            return 'col-1 list__items orange'  
        }else{
            return 'col-1 list__items green' 
        }
    }

    return (
        <div className='ElderProfile'>
            <div className="container-fluid p__area__wrapper">
                <TopBar/>
                <LateralBar/> 
                <div className="container px-1 py-3 border">
                    <div className="row mx-5">
                        <div className="col-6">
                            <img src="http://via.placeholder.com/150" alt=""/>
                            <div className="col-12 my-2">
                                <h1>{firstname} {lastname}</h1>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col">
                                <h4 >Grupo: <span className={groupColor(group)}>{group}</span> </h4>
                                <h4 >Género: {gender} </h4>
                                <h4>Fecha de nacimiento: {dateOfBirth.split('T')[0].split("-").reverse().join("-")}</h4>
                                <h4>Dieta: {diet}</h4>
                            </div>
                           
                        
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ElderProfile;