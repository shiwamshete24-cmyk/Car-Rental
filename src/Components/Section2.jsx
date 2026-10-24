import React from 'react'
import '../Components/Mysection2.css'

const Section2 = () => {
  return (
    <div className='container py-5'>
        <div className='row justify-content-center align-items-center'>
            <div className='col-12 text-center margin-section2'>
                <h2 className='font-section2'>Choose your Desired Car Model</h2>
                <p className='font2-section2'>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className='col-12 col-md-6 col-lg-5 margin-section2'>
                <div className='d-flex justify-content-between align-items-center'><span className='font3-section2'>Audi 3000 msi</span>
                <span className='font-section2 text-warning'>$149<sub className='font1-section2'>/day</sub></span></div>
                <p className='font2-section2 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className='font2-section2 my-4'>Capacity : 04 Person <br /> Doors : 04 <br /> Air Condition : Dual Zone <br /> Transmission : Automatic</p>
                <button className='btn btn-dark font1-section2 rounded-0 px-3'>BOOK THIS CAR NOW</button>
            </div>
            <div className='col-12 col-md-6 col-lg-5 margin-section2'>
                <img src="src/assets/car.jpg" alt="" className='img-fluid font1-section2 '/>
            </div>

        </div>

    </div>
  )
}

export default Section2