import React from 'react'
import '../Components/Cards.css'

const Card2 = ({ mydata }) => {

    return (
        <div className='container bg-color1 mycard-padding1 '>
            <div className='row justify-content-center align-items-center g-0'>
                <div className='col-12 col-md-8 col-lg-8'>
                    <h2 className='mt-4 mb-1  text-center font'>Some Features that Made us Unique</h2>
                    <p className='mb-5 text-center font2  '>Who are in extremely love with eco friendly system.</p>

                </div>
                <div className='col-12 col-md-12 col-lg-12'>
                    <div className='row justify-content-center align-items-center g-0'>
                        {
                            mydata.map((item, index) => {
                                return (
                                    <div className='col-12 col-md-6 col-lg-4 my-2 p-3 text-center'>
                                        <div key={index}>
                                            <div className='px-5 py-4 rounded-3 mystyle bg-color2'>
                                                <h5 className='mt-3 mb-3 font1'>{item.title}</h5>
                                                <p className='mb-3 font2'>{item.info}</p>
                                                <div className='text-center font2-star'>
                                                    <i className="fa-solid fa-star text-warning"></i>
                                                    <i className="fa-solid fa-star text-warning"></i>
                                                    <i className="fa-solid fa-star text-warning"></i>
                                                    <i className={item.user} id=''></i>
                                                    <i className={item.user} id=''></i>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>


                </div>
            </div>

        </div>
    )



}

export default Card2