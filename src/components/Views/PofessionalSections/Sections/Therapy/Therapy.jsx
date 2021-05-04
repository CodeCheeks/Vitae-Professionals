import React from 'react';
import Agenda from '../../../../Agenda/Agenda';
import ProfessionalSection from '../ProfessionalSection/ProfessionalSection';

const Therapy = () => {
    return (
        <div className="my-5">
            <div className="row my-5">
                <div className="col-12">
                    <h1 className='text-center main__title'>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620155343/Vitae/iconos/tejido-de-punto_z6i6iw.png" className='mx-2  ' alt="reports" width='80'/>
                        Departamento de terapia ocupacional
                    </h1>
                </div>
            </div>
            <ProfessionalSection department="occupational therapist"/>
            <Agenda section="occupational therapist" />
        </div>
    );
};

export default Therapy;