import React from 'react';
import Agenda from '../../../../Agenda/Agenda';
import ProfessionalSection from '../ProfessionalSection/ProfessionalSection';

const SocialWork = () => {
    return (
        <div className="my-5">
            <ProfessionalSection department="social worker"/>
            <Agenda section="social worker" />
        </div>
    );
};

export default SocialWork;