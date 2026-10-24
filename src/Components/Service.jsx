import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Myhero2.css'
import Mycard from './Mycard'
import Section3 from './Section3'
import Mycard2 from './Mycard2'

const Service = () => {
  return (
    <div>
      <section className='container-fluid Myhero2'>
        <div className='row justify-content-center align-items-center hero2-box-height'>
          <div className='col-12 text-center text-white   '>
            <div className='my-1 hero2-font'>Service</div>
            <div>
              <span><Link to="/home" className='mx-2 hero2-a-font'>Home</Link></span>
              <span><i className="fa-solid fa-arrow-right mx-2"></i></span>
              <span><Link to="/service" className='mx-2 hero2-a-font'>Service</Link></span>
            </div>
          </div>
        </div>
      </section>
      <Mycard/>
      <Section3/>
      <Mycard2/>
    </div>
  )
}

export default Service