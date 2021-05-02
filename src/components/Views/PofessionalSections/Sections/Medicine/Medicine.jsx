import React from 'react';
import Agenda from '../../../../Agenda/Agenda';
import ProfessionalSection from '../ProfessionalSection/ProfessionalSection';

const Medicine = () => {
    return (
        <div>
            <h1>Medicina</h1>
            <ProfessionalSection department="doctor"/>
            <Agenda section="doctor" />
        </div>
    );
};

export default Medicine;