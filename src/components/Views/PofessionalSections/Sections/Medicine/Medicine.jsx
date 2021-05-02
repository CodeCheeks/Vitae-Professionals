import React from 'react';
import Agenda from '../../../../Agenda/Agenda';
import ProfessionalSection from '../ProfessionalSection/ProfessionalSection';

const Medicine = () => {
    return (
        <div className="my-5">
            <ProfessionalSection department="doctor"/>
            <Agenda section="doctor" />
        </div>
    );
};

export default Medicine;