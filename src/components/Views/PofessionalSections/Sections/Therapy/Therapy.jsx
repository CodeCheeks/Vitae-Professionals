import React from 'react';
import Agenda from '../../../../Agenda/Agenda';
import ProfessionalSection from '../ProfessionalSection/ProfessionalSection';

const Therapy = () => {
    return (
        <div>
            <h1>Terapia Ocupacional</h1>
            <ProfessionalSection department="occupational therapist"/>
            <Agenda section="occupational therapist" />
        </div>
    );
};

export default Therapy;