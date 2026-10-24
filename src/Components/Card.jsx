import React from 'react'
import '../Components/Cards.css'

const Card = ({ mydata }) => {
    return (
        <div className='container bg-color1 mycard-padding '>
            <div className='row justify-content-center align-items-center g-0'>
                <div className='col-12 col-md-8 col-lg-8'>
                    <h2 className='my-4   text-center font'>What services we offer to our clients</h2>
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
                                                <h5 className='mt-3 mb-3 font1'><span className='me-2'><i className={item.user}></i></span>{item.title}</h5>
                                                <p className='mb-3 font2'>{item.info}</p>
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

export default Card