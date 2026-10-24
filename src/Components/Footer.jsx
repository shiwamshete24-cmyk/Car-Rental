import React from 'react'
import '../Components/Myfooter.css'

const Footer = () => {
  return (
    <div className='container-fluid  py-5 bg-fllter text-white'>
      <div className='container  '>
        <div className='row flex-property height-footer'>
          <div className='col-12 col-md-6 col-lg-2 my-2'>
            <h2 className='font-footer my-4'>Quick links</h2>
            <h5 className='font2-footer my-3'>Jobs</h5>
            <h5 className='font2-footer my-3'>Brand Assets</h5>
            <h5 className='font2-footer my-3'>Investor Relations</h5>
            <h5 className='font2-footer my-3'>Terms of Service</h5>
          </div>
          <div className='col-12 col-md-6 col-lg-2 my-2'>
            <h2 className='font-footer'>Features</h2>
            <h5 className='font2-footer  my-3 '>Jobs</h5>
            <h5 className='font2-footer  my-3'>Brand Assets</h5>
            <h5 className='font2-footer  my-3'>Investor Relations</h5>
            <h5 className='font2-footer  my-3'>Terms of Service</h5>
          </div>
          <div className='col-12 col-md-6 col-lg-2 my-2'>
            <h2 className='font-footer my-3'> Resources</h2>
            <h5 className='font2-footer my-3'>Jobs</h5>
            <h5 className='font2-footer my-3'>Brand Assets</h5>
            <h5 className='font2-footer my-3'>Investor Relations</h5>
            <h5 className='font2-footer my-3'>Terms of Service</h5>
          </div>
          <div className='col-12 col-md-6 col-lg-2 my-2'>
            <h2 className='font-footer'>Follow Us</h2>
            <h5 className='font2-footer  my-3'>Let us be social</h5>
            <h5 className='font2-footer  my-3 '>
              <span><i class="fa-brands fa-linkedin-in mx-2 text-white"></i></span>
              <span><i class="fa-brands fa-twitter mx-2 text-white"></i></span>
              <span><i class="fa-brands fa-facebook-f mx-2 text-white"></i></span>
              <span><i class="fa-brands fa-instagram mx-2 text-white"></i></span>
            </h5>

          </div>
          <div className='col-12 col-md-6 col-lg-2 my-2'>
            <h2 className='font-footer'>News Letter</h2>
            <h5 className='font2-footer  my-3'>Stay update with our latest</h5>
            <h5 className='font-footer  my-3'>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="username" aria-label="Recipient’s username" aria-describedby="button-addon2" />
                <button class="btn btn-warning text-white" type="button" id="button-addon2"><i class="fa-solid fa-arrow-right"></i></button>
              </div>

            </h5>

          </div>

          <div className='col-12 my-5 text-center font2-footer'>
            Copyright ©2025 All rights reserved | This template is made with  by   <i class="fa-solid fa-heart text-danger">  </i>   shiwam shete
          </div>

        </div>
      </div>

    </div>
  )
}

export default Footer