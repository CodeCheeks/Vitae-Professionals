import React from 'react';
import Agenda from '../../../../Agenda/Agenda';
import ProfessionalSection from '../ProfessionalSection/ProfessionalSection';

const Physiotherapy = () => {
    return (
        <div>
            <h1>Fisioterapia</h1>
            <ProfessionalSection department="physiotherapist"/>
            <Agenda section="physiotherapist" />
        </div>
    );
};

export default Physiotherapy;