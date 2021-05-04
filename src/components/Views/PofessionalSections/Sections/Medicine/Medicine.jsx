import React from 'react';
import Agenda from '../../../../Agenda/Agenda';
import ProfessionalSection from '../ProfessionalSection/ProfessionalSection';

const Medicine = () => {
    return (
        <div className="my-5">
            <div className="row my-5">
                <div className="col-12">
                    <h1 className='text-center main__title'>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620155587/Vitae/iconos/informe-medico_ed8nhn.png" className='mx-2  ' alt="reports" width='80'/>
                        Departamento de medicina
                    </h1>
                </div>
            </div>
            <ProfessionalSection department="doctor"/>
            <Agenda section="doctor" />
        </div>
    );
};

export default Medicine;