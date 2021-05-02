
import React from 'react';
import ProfessionalSection from '../ProfessionalSection/ProfessionalSection';
import Agenda from '../../../../Agenda/Agenda';

const Nursing = () => {

    return (
        <div className="my-5">
            <ProfessionalSection department="nurse"/>
            <Agenda section="nurse" />
        </div>
    );
};

export default Nursing;

