import React from 'react'
import '../Components/Myhero.css'

const Hero_section = () => {
    return (
        <div className='hero1'>


            <div className='container'>

                <div className='row justify-content-center align-items-center height'>
                    <div className='col-11 col-md-6 col-lg-6 my-m '>
                        <h3 className='aa '>the Royal Essence of Journey</h3>
                        <h2 className='a'>Relaxed Journey Ever</h2>
                        <p className='aaa '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className='btn btn-warning px-4 rounded-0 text-white mt-3 p-2 aa mybtn'>RENT CAR NOW</button>
                    </div>


                    <div className='col-10 col-md-6 col-lg-5 my-m margin2'>
                        <div className='row bg-edit p-0 justify-content-center align-items-center'>

                            {/* ........................................................ */}
                            <h5 className='col-11 mb-4 text-white mt-4'>Book Your Car Today!</h5>
                            <div className=' row justify-center-center align-items-center'>



                                <div className='col-12 mb-3'>
                                    <select class="form-select border-0 rounded-1" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='col-12 mb-3'>
                                    <div class="row">
                                        <div class="col-12 col-mg-6 col-lg-6 mb-3">
                                            <select class="form-select rounded-1" aria-label="Default select example">
                                                <option selected>Pick Up</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div class="col-12 col-mg-6 col-lg-6">
                                            <input type="date" class="form-control rounded-1" placeholder="Date Time" aria-label="Last name" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 m-1'>
                                    <div class="row">
                                        <div class="col-12 col-md-6  col-lg-6 mb-3">
                                            <select class="form-select rounded-1" aria-label="Default select example">
                                                <option selected>Drop Off</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-6 mb-3">
                                            <input type="date" class="form-control rounded-1" placeholder="Date Time" aria-label="Last name" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 mb-3'>
                                    <input type="text" className='form-control rounded-1' placeholder='your name' />
                                </div>
                                <div className='col-12 mb-3'>
                                    <input type="email" className='form-control rounded-1' placeholder='Email Address' />
                                </div>
                                <div className='col-12 mb-3'>
                                    <input type="number" className='form-control rounded-1' placeholder='Phone Number' />
                                </div>
                                <div className='col-12 mb-3 text-center'>
                                    <button className='btn mybtn form-control border border-warning rounded-1  text-center'>CONFORM CAR BOOKING</button>
                                </div>

                                {/* .............................................................. */}
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default Hero_section