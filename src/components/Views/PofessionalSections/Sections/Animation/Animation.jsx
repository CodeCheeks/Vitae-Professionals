import React from 'react';
import Agenda from '../../../../Agenda/Agenda';
import ProfessionalSection from '../ProfessionalSection/ProfessionalSection';

const Animation = () => {
    return (
        <div className="my-5">
            <div className="row my-5">
                <div className="col-12">
                    <h1 className='text-center main__title'>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620034550/Vitae/iconos/challenge_jxjyqo.png" className='mx-2  ' alt="reports" width='80'/>
                        Departamento de animación
                    </h1>
                </div>
            </div>
            <ProfessionalSection department="animator"/>
            <Agenda section="animator" />
        </div>
    );
};

export default Animation;