import React from 'react'
import '../Components/Contact_form.css'

const Mycontact = () => {
    return (
        <div>
            <div className='container my-5'>
                <div className='row justify-content-center align-items-center'>

                    <div className='col-12 border-dark border-2 map-height'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d121057.32763082335!2d73.8492416!3d18.5270272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1763146982103!5m2!1sen!2sin" className='' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                </div>
            </div>
            <section className='my-5'>
                <div class="container contact-box">
                    <div class="row  my-3 text-center">


                        <div class="col-lg-4 col-md-12">
                            <div class="d-flex mb-4">
                                <div class="icon-box "><i class="fa-solid fa-house"></i></div>
                                <div>
                                    <h5 class="info-title2">Dhaka, Bangladesh</h5>
                                    <p class="info-text2">56/8, West Panthapath</p>
                                </div>
                            </div>

                            <div class="d-flex mb-4">
                                <div class="icon-box "><i class="fa-solid fa-phone"></i></div>
                                <div>
                                    <h5 class="info-title2">00 (880) 9865 562</h5>
                                    <p class="info-text2">Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>

                            <div class="d-flex mb-4">
                                <div class="icon-box "><i class="fa-solid fa-envelope"></i></div>
                                <div>
                                    <h5 class="info-title2">support@codethemes.com</h5>
                                    <p class="info-text2">Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-8 col-md-12">
                            <div class="row g-3">

                                <div class=" col-12 col-md-6 col-lg-6">
                                    <input type="text" class="form-control py-3" placeholder="Enter your name" />
                                </div>

                                <div class=" col-12 col-md-6">
                                    <input type="email" class="form-control py-3" placeholder="Enter email address" />
                                </div>

                                <div class="col-12 col-md-12">
                                    <input type="text" class="form-control py-3" placeholder="Enter your subject" />
                                </div>

                                <div class="col-12 col-md-12">
                                    <textarea class="form-control py-4" placeholder="Message"></textarea>
                                </div>

                                <div class="col-12 col-md-12 mb-5">
                                    <button class="btn btn-custom">SEND MESSAGE</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Mycontact