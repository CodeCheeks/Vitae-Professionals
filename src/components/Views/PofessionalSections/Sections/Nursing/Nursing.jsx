
import React from 'react';
import ProfessionalSection from '../ProfessionalSection/ProfessionalSection';
import Agenda from '../../../../Agenda/Agenda';

const Nursing = () => {

    return (
        <div className="my-5"><div className="row my-5">
        <div className="col-12">
            <h1 className='text-center main__title'>
                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620155735/Vitae/iconos/healthcare_e74g6h.png" className='mx-2  ' alt="reports" width='80'/>
                Departamento de enfermería
            </h1>
        </div>
    </div>

            <ProfessionalSection department="nurse"/>
            <Agenda section="nurse" />
        </div>
    );
};

export default Nursing;

