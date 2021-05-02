
import './Nursing.css'

import React from 'react';

import ProfessionalSection from '../ProfessionalSection/ProfessionalSection';


const Nursing = () => {

    return (
        <div className="container UsersList">
            <h1>Enfermería</h1>
            <ProfessionalSection department="nurse"/>
        </div>
    );
};

export default Nursing;

