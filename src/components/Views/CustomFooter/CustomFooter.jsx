import React from 'react';
import './CustomFooter.css'
  
  const CustomFooter = () => {

    return (
        <div className="container-fluid footer__container">
            <div className='container'> 
                <div className="d-flex align-items-center row justify-content-between">
                    <div className="col">
                        <h6 className="text-light">© 2021 Copyright | Vitae Professionals</h6>
                    </div>

                </div>
            </div>
        </div>
      );
  };
  


  export default CustomFooter