import React from 'react';
import Agenda from '../../../../Agenda/Agenda';
import ProfessionalSection from '../ProfessionalSection/ProfessionalSection';

const Psychology = () => {
    return (
        <div>
            <h1>Psicología</h1>
            <ProfessionalSection department="psychologist"/>
            <Agenda section="psychologist" />
        </div>
    );
};

export default Psychology;