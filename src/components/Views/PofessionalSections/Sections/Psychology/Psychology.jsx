import React from 'react';
import Agenda from '../../../../Agenda/Agenda';
import ProfessionalSection from '../ProfessionalSection/ProfessionalSection';

const Psychology = () => {
    return (
        <div className="my-5">
            <ProfessionalSection department="psychologist"/>
            <Agenda section="psychologist" />
        </div>
    );
};

export default Psychology;