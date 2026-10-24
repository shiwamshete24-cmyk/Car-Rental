import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Myhero2.css'

const Hero2 = () => {
    return (
        <div className='container-fluid Myhero2'>
            <div className='row justify-content-center align-items-center hero2-box-height'>
                <div className='col-12 text-center text-white   '>
                    <div className='my-1 hero2-font'>About Us</div>
                    <div>
                        <span><Link to="/home" className='mx-2 hero2-a-font'>Home</Link></span>
                        <span><i className="fa-solid fa-arrow-right mx-2"></i></span>
                        <span><Link to="/about" className='mx-2 hero2-a-font'>About</Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2