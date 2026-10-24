import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Myhero2.css'
import Section4 from './Section4'
import Mycard from './Mycard'

const Team = () => {
    return (
        <div>
            <div className='container-fluid Myhero2'>
                <div className='row justify-content-center align-items-center hero2-box-height'>
                    <div className='col-12 text-center text-white   '>
                        <div className='my-1 hero2-font'>Support Teams</div>
                        <div>
                            <span><Link to="/home" className='mx-2 hero2-a-font'>Home</Link></span>
                            <span><i className="fa-solid fa-arrow-right mx-2"></i></span>
                            <span><Link to="/team" className='mx-2 hero2-a-font'>Team</Link></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <div className='row justify-content-center align-items-center text-center'>
                    <div className='col-12 col-md-12 col-lg-12 my-5'>
                        <h2 className='font-section2'>Experienced Mentor Team</h2>
                        <p className='font2-section2'>Who are in extremely love with eco friendly system.</p>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3">
                        <img src="src/assets/t1.jpg" alt="" className='img-fluid' />
                        <h3 className='mt-3 mb-0 font-footer'>Ethel Devid</h3>
                        <p className='mb-5 font2-section2'>Man   ager director(sales)</p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3">
                        <img src="src/assets/t2.jpg" alt="" className='img-fluid' />
                        <h3 className='mt-3 mb-0 font-footer'>Ethel Devid</h3>
                        <p className='mb-5 font2-section2'>Man   ager director(sales)</p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3">
                        <img src="src/assets/t3.jpg" alt="" className='img-fluid' />
                        <h3 className='mt-3 mb-0 font-footer'>Ethel Devid</h3>
                        <p className='mb-5 font2-section2'>Man   ager director(sales)</p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3">
                        <img src="src/assets/t4.jpg" alt="" className='img-fluid' />
                        <h3 className='mt-3 mb-0 font-footer'>Ethel Devid</h3>
                        <p className='mb-5 font2-section2'>Man   ager director(sales)</p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3">
                        <img src="src/assets/t1.jpg" alt="" className='img-fluid' />
                        <h3 className='mt-3 mb-0 font-footer'>Ethel Devid</h3>
                        <p className='mb-5 font2-section2'>Man   ager director(sales)</p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3">
                        <img src="src/assets/t2.jpg" alt="" className='img-fluid' />
                        <h3 className='mt-3 mb-0 font-footer'>Ethel Devid</h3>
                        <p className='mb-5 font2-section2'>Man   ager director(sales)</p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3">
                        <img src="src/assets/t3.jpg" alt="" className='img-fluid' />
                        <h3 className='mt-3 mb-0 font-footer'>Ethel Devid</h3>
                        <p className='mb-5 font2-section2'>Man   ager director(sales)</p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3">
                        <img src="src/assets/t4.jpg" alt="" className='img-fluid' />
                        <h3 className='mt-3 mb-0 font-footer'>Ethel Devid</h3>
                        <p className='mb-5 font2-section2'>Man   ager director(sales)</p>
                    </div>

                </div>

            </div>
            <Section4 />
            <Mycard />
        </div>
    )
}

export default Team