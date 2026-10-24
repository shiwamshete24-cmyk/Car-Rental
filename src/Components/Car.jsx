import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Myhero2.css'
import Section2 from './Section2'
import Section3 from './Section3'
import Mycard from './Mycard'

const Car = () => {
    return (
        <div>
            <div className='container-fluid Myhero2'>
                <div className='row justify-content-center align-items-center hero2-box-height'>
                    <div className='col-12 text-center text-white   '>
                        <div className='my-1 hero2-font'>Car</div>
                        <div>
                            <span><Link to="/home" className='mx-2 hero2-a-font'>Home</Link></span>
                            <span><i className="fa-solid fa-arrow-right mx-2"></i></span>
                            <span><Link to="/car" className='mx-2 hero2-a-font'>Car</Link></span>
                        </div>
                    </div>
                </div>
            </div>
            <Section2 />
            <Section3 />
            <Mycard />
        </div>
    )
}

export default Car