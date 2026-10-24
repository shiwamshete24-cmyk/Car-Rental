import React from 'react'
import '../Components/Mysection.css'

const Section1 = () => {
    return (
        <div className='container-fluid mb-5'>
            <div className='row justify-content-center align-items-center'>
                <div className='col-12 col-md-12 col-lg-6 g-0'>
                    <img src="src\assets\about-img.jpg" alt="" className='img-fluid' />
                </div>
                <div className='col-12 col-md-12 col-lg-6 padding-section'>
                    <div className="row ">
                        <div className="co-sm-10 col-md-12 col-lg-8">
                            <h2 className="font-section">Globally Connected
                                by <br /> Large Network</h2>
                            <h5 className='font1-section py-3'>We are here to listen from you deliver exellence</h5>
                            <p className="font2-section py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.

                            </p>
                            <a href="#" className="btn font1-section border-1 border-warning rounded-0  px-5 py-2 mybtn">GET   DETAILS</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section1