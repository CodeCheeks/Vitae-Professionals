import React from 'react';
import Agenda from '../../../../Agenda/Agenda';
import ProfessionalSection from '../ProfessionalSection/ProfessionalSection';

const Animation = () => {
    return (
        <div className="my-5">
            <ProfessionalSection department="animator"/>
            <Agenda section="animator" />
        </div>
    );
};

export default Animation;