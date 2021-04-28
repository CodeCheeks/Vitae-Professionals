import React from 'react';
import './AdminProfessional.css'
import ProfessionalList from '../Lists/ProfessionalList/ProfessionalList'
const CreateProfessional = () => {
    return (
        <div className='CreateProfessional'>
           <ProfessionalList/> 
        </div>
    );
};

export default CreateProfessional;