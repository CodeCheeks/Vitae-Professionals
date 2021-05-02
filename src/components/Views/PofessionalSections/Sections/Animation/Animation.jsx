import React from 'react';
import Agenda from '../../../../Agenda/Agenda';
import ProfessionalSection from '../ProfessionalSection/ProfessionalSection';

const Animation = () => {
    return (
        <div>
            <h1>Animación</h1>
            <ProfessionalSection department="animator"/>
            <Agenda section="animator" />
        </div>
    );
};

export default Animation;