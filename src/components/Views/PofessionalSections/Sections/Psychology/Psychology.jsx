import React from 'react';
import Agenda from '../../../../Agenda/Agenda';
import ProfessionalSection from '../ProfessionalSection/ProfessionalSection';

const Psychology = () => {
    return (
        <div className="my-5">
            <div className="row my-5">
                <div className="col-12">
                    <h1 className='text-center main__title'>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620155390/Vitae/iconos/brainstorm_dxe0gs.png" className='mx-2  ' alt="reports" width='80'/>
                        Departamento de psicología
                    </h1>
                </div>
            </div>
            <ProfessionalSection department="psychologist"/>
            <Agenda section="psychologist" />
        </div>
    );
};

export default Psychology;