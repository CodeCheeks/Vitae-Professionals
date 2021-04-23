import React, { useContext } from 'react';
import './ElderProfile.css'
import { useParams } from 'react-router';
import { ElderContext } from "../../../../contexts/ElderContext"

const ElderProfile = () => {
    const {id} = useParams()
    const { elders } = useContext(ElderContext)

    const selectedElder = elders.find(eld => eld.id === id.toString())
    
    

    return (
        <div className='ElderProfile'>
            <h1>{selectedElder.firstname}</h1>
            <h1>{selectedElder.lastname}</h1>
            
           <h1>Elder </h1> 
        </div>
    );
};

export default ElderProfile;