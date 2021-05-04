import React from 'react';
import Agenda from '../../../../Agenda/Agenda';
import ProfessionalSection from '../ProfessionalSection/ProfessionalSection';

const SocialWork = () => {
    return (
        <div className="my-5">
            <div className="row my-5">
                <div className="col-12">
                    <h1 className='text-center main__title'>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620155266/Vitae/iconos/social-network_jboqaa.png" className='mx-2  ' alt="reports" width='80'/>
                        Departamento de trabajo social
                    </h1>
                </div>
            </div>
            <ProfessionalSection department="social worker"/>
            <Agenda section="social worker" />
        </div>
    );
};

export default SocialWork;