import React from 'react';
import Agenda from '../../../../Agenda/Agenda';
import ProfessionalSection from '../ProfessionalSection/ProfessionalSection';

const Physiotherapy = () => {
    return (
        <div className="my-5">
            <div className="row my-5">
                <div className="col-12">
                    <h1 className='text-center main__title'>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620155494/Vitae/iconos/hueso_1_wdp0az.png" className='mx-2  ' alt="reports" width='80'/>
                        Departamento de fisioterapia
                    </h1>
                </div>
            </div>
            <ProfessionalSection department="physiotherapist"/>
            <Agenda section="physiotherapist" />
        </div>
    );
};

export default Physiotherapy;