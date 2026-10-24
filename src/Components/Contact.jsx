import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Myhero2.css'
import Mycontact from './Mycontact'

const Contact = () => {
    return (
        <div>
            <div className='container-fluid Myhero2'>
                <div className='row justify-content-center align-items-center hero2-box-height'>
                    <div className='col-12 text-center text-white   '>
                        <div className='my-1 hero2-font'>About Us</div>
                        <div>
                            <span><Link to="/home" className='mx-2 hero2-a-font'>Home</Link></span>
                            <span><i className="fa-solid fa-arrow-right mx-2"></i></span>
                            <span><Link to="/contact" className='mx-2 hero2-a-font'>Contact</Link></span>
                        </div>
                    </div>
                </div>
            </div>
            <Mycontact />
        </div>
    )
}

export default Contact