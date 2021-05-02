
import React from 'react';
import ProfessionalSection from '../ProfessionalSection/ProfessionalSection';
import Agenda from '../../../../Agenda/Agenda';

const Nursing = () => {

    return (
        <div>
            <h1>Enfermería</h1>
            <ProfessionalSection department="nurse"/>
            <Agenda section="nurse" />
        </div>
    );
};

export default Nursing;

